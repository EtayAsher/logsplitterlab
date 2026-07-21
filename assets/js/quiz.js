// Log splitter match quiz: five questions, category recommendation, with a
// tie-breaker question if scores are too close to call. Accessible modal:
// focus trap, focus return, Escape/backdrop close, restart.
(function () {
  'use strict';

  var overlay = document.getElementById('quizOverlay');
  var closeBtn = document.getElementById('quizClose');
  var body = document.getElementById('quizBody');
  var progressLabel = document.getElementById('quizProgressLabel');
  var progressFill = document.getElementById('quizProgressFill');
  var modal = overlay ? overlay.querySelector('.quiz-modal') : null;
  if (!overlay || !closeBtn || !body || !modal) return;

  var main = document.getElementById('main');
  var header = document.querySelector('.site-header');
  var footer = document.querySelector('.site-footer');

  var QUESTIONS = [
    {
      q: 'How much wood do you split per year?',
      options: [
        { label: 'A little (1-2 cords)', scores: { manual: 2, electric: 1, gas: 0 } },
        { label: 'A moderate amount (3-5 cords)', scores: { electric: 2, gas: 1, manual: 0 } },
        { label: 'A lot (6+ cords)', scores: { gas: 3, electric: 0, manual: 0 } },
      ],
    },
    {
      q: 'What type of wood do you split mostly?',
      options: [
        { label: 'Softwood (pine, cedar)', scores: { manual: 2, electric: 2, gas: 0 } },
        { label: 'Mixed hardwood (oak, maple)', scores: { electric: 1, gas: 2, manual: 0 } },
        { label: 'Very dense hardwood (elm, hickory)', scores: { gas: 3, electric: 0, manual: 0 } },
      ],
    },
    {
      q: 'Where will you use it?',
      options: [
        { label: 'Near a power outlet', scores: { electric: 3, gas: 0, manual: 0 } },
        { label: 'In the field or remote area', scores: { gas: 3, manual: 1, electric: 0 } },
        { label: "I'm not sure", scores: { electric: 1, gas: 1, manual: 1 } },
      ],
    },
    {
      q: "What's your budget?",
      options: [
        { label: 'Under $300', scores: { manual: 2, electric: 2, gas: 0 } },
        { label: '$300–$800', scores: { electric: 2, gas: 1, manual: 0 } },
        { label: 'Over $800', scores: { gas: 3, electric: 0, manual: 0 } },
      ],
    },
    {
      q: 'How important is low maintenance?',
      options: [
        { label: 'Very important', scores: { electric: 2, manual: 2, gas: 0 } },
        { label: 'Somewhat important', scores: { electric: 1, gas: 1, manual: 0 } },
        { label: 'Not important', scores: { gas: 2, electric: 0, manual: 0 } },
      ],
    },
  ];

  var TIE_BREAKER = {
    q: 'One more question, since your answers were close: what matters most to you?',
    options: [
      { label: 'Maximum power and speed', scores: { gas: 5, electric: 0, manual: 0 } },
      { label: 'Convenience and low noise', scores: { electric: 5, gas: 0, manual: 0 } },
      { label: 'Simplicity and low cost', scores: { manual: 5, gas: 0, electric: 0 } },
    ],
  };

  var RESULTS = {
    electric: {
      title: 'An electric splitter fits your answers best.',
      desc: 'Electric splitters run quiet, need very little maintenance, and are a good match for splitting near a house or garage. They typically top out around 7–10 tons, which covers most home firewood needs but not the densest, largest rounds.',
      cta: 'See Best Electric Log Splitters',
      type: 'electric',
      href: '/best-electric-log-splitters/',
    },
    gas: {
      title: 'A gas splitter fits your answers best.',
      desc: 'Gas splitters deliver the most power and go anywhere, which suits large volumes, dense hardwood, or remote sites without power. The tradeoff is more noise, fuel, and routine engine maintenance.',
      cta: 'See Best Gas Log Splitters',
      type: 'gas',
      href: '/best-gas-log-splitters/',
    },
    manual: {
      title: 'A manual splitter may suit your workload.',
      desc: 'A manual hydraulic splitter needs no fuel or outlet and costs the least, which suits light, occasional splitting of softer wood. It asks more of your own effort and takes longer per log than a powered machine. Our manual product reviews are still being researched.',
      cta: 'See the Buying Guide',
      type: 'manual',
      href: '/buying-guide/#g-power',
    },
  };

  // Base-path detection: read it off the stylesheet link, which every page
  // includes and which always lives at "<base>/assets/css/styles.css".
  var cssLink = document.querySelector('link[href$="/assets/css/styles.css"]');
  var BASE = cssLink ? cssLink.getAttribute('href').replace(/\/assets\/css\/styles\.css$/, '') : '';

  var state = { step: 0, scores: { electric: 0, gas: 0, manual: 0 }, answers: [], tieBreak: false };
  var triggerEl = null;
  var focusablesSelector = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function scoreEntries(scores) {
    return ['electric', 'gas', 'manual'].map(function (k) { return { key: k, val: scores[k] }; });
  }

  function isTie(scores) {
    var entries = scoreEntries(scores).sort(function (a, b) { return b.val - a.val; });
    return entries[0].val - entries[1].val <= 1;
  }

  function winner(scores) {
    var entries = scoreEntries(scores).sort(function (a, b) { return b.val - a.val; });
    return entries[0].key;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderQuestion(question, index, total) {
    progressLabel.textContent = 'Question ' + (index + 1) + ' of ' + total;
    progressFill.style.width = ((index / total) * 100) + '%';

    var optionsHtml = question.options.map(function (opt, idx) {
      return '<li><button type="button" class="quiz-option" data-idx="' + idx + '">' + escapeHtml(opt.label) + '</button></li>';
    }).join('');

    body.innerHTML =
      '<div class="quiz-question">' +
        '<h3>' + escapeHtml(question.q) + '</h3>' +
        '<ul class="quiz-options">' + optionsHtml + '</ul>' +
      '</div>';

    var buttons = body.querySelectorAll('.quiz-option');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.getAttribute('data-idx'), 10);
        var opt = question.options[idx];
        Object.keys(opt.scores).forEach(function (k) { state.scores[k] += opt.scores[k]; });
        state.answers.push({ q: question.q, a: opt.label });
        advance(total);
      });
    });
    buttons[0].focus();
  }

  function advance(total) {
    state.step++;
    if (state.step < total) {
      renderQuestion(QUESTIONS[state.step], state.step, total);
      return;
    }
    if (!state.tieBreak && isTie(state.scores)) {
      state.tieBreak = true;
      progressLabel.textContent = 'One more question';
      progressFill.style.width = '90%';
      var optionsHtml = TIE_BREAKER.options.map(function (opt, idx) {
        return '<li><button type="button" class="quiz-option" data-tb="' + idx + '">' + escapeHtml(opt.label) + '</button></li>';
      }).join('');
      body.innerHTML =
        '<div class="quiz-question">' +
          '<h3>' + escapeHtml(TIE_BREAKER.q) + '</h3>' +
          '<ul class="quiz-options">' + optionsHtml + '</ul>' +
        '</div>';
      var tbButtons = body.querySelectorAll('.quiz-option');
      tbButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var idx = parseInt(btn.getAttribute('data-tb'), 10);
          var opt = TIE_BREAKER.options[idx];
          Object.keys(opt.scores).forEach(function (k) { state.scores[k] += opt.scores[k]; });
          state.answers.push({ q: TIE_BREAKER.q, a: opt.label });
          renderResult();
        });
      });
      tbButtons[0].focus();
      return;
    }
    renderResult();
  }

  function renderResult() {
    progressLabel.textContent = 'Your result';
    progressFill.style.width = '100%';

    var result = RESULTS[winner(state.scores)];
    if (window.lslTrack) window.lslTrack('quiz_completed', { result_category: result.type });
    var summaryHtml = state.answers.map(function (a) {
      return '<li><b>' + escapeHtml(a.q) + '</b> — ' + escapeHtml(a.a) + '</li>';
    }).join('');

    body.innerHTML =
      '<div class="quiz-result">' +
        '<h3>' + escapeHtml(result.title) + '</h3>' +
        '<p>' + escapeHtml(result.desc) + '</p>' +
        '<ul class="quiz-summary">' + summaryHtml + '</ul>' +
        '<div class="quiz-result-actions">' +
          '<a class="btn btn-green" id="quizCtaBtn" href="' + BASE + (result.href || ('/reviews/?type=' + result.type)) + '">' + escapeHtml(result.cta) + '</a>' +
          '<button type="button" class="btn btn-dark-outline btn-sm" id="quizRestartBtn">Start over</button>' +
        '</div>' +
      '</div>';

    var cta = document.getElementById('quizCtaBtn');
    cta.addEventListener('click', function () { close(); });
    document.getElementById('quizRestartBtn').addEventListener('click', function () {
      start();
    });
    cta.focus();
  }

  function start() {
    state = { step: 0, scores: { electric: 0, gas: 0, manual: 0 }, answers: [], tieBreak: false };
    renderQuestion(QUESTIONS[0], 0, QUESTIONS.length);
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    var focusables = Array.prototype.slice.call(modal.querySelectorAll(focusablesSelector))
      .filter(function (el) { return el.offsetParent !== null; });
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function onKeydown(e) {
    if (e.key === 'Escape') { close(); }
    else { trapFocus(e); }
  }

  function open(trigger) {
    if (window.lslTrack) window.lslTrack('quiz_opened', {});
    triggerEl = trigger || null;
    overlay.hidden = false;
    // Force reflow so the CSS transition/visibility applies consistently.
    void overlay.offsetWidth;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    [main, header, footer].forEach(function (el) { if (el) el.setAttribute('inert', ''); });
    document.addEventListener('keydown', onKeydown, true);
    start();
    closeBtn.focus();
  }

  function close() {
    overlay.classList.remove('open');
    overlay.hidden = true;
    document.body.style.overflow = '';
    [main, header, footer].forEach(function (el) { if (el) el.removeAttribute('inert'); });
    document.removeEventListener('keydown', onKeydown, true);
    if (triggerEl && document.contains(triggerEl)) triggerEl.focus();
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-open-quiz]');
    if (trigger) {
      e.preventDefault();
      open(trigger);
    }
  });

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
})();
