// Central author data — the single source of truth for author bylines,
// the author box, the /author/ page, and Person schema everywhere.
//
// TRUTHFULNESS RULE: every field here must be something the site owner has
// actually confirmed. Do not add credentials, years of experience, a
// location, or claims of hands-on product testing that haven't been
// explicitly supplied. Leave a field null/omitted rather than inferring or
// embellishing it. See README.md "Verification rules" — this file is
// covered by the same standard as product data.
'use strict';

module.exports = {
  name: 'Etay Asher',
  slug: 'etay-asher',
  role: 'Founder, LogSplitterLab',

  // Short version, used in the author box under articles.
  shortBio: 'Etay Asher founded LogSplitterLab to help homeowners and rural property owners choose the right log splitter. Research on this site is built from manufacturer specifications, technical documentation, comparison analysis, and reader feedback.',

  // Longer version, used on the dedicated author page.
  longBio: [
    'Etay Asher founded LogSplitterLab to help homeowners and rural property owners cut through marketing copy and figure out which log splitter actually fits their situation.',
    'Research on this site is built from manufacturer specifications and technical documentation, comparison analysis across models, and reader feedback — not from a testing lab or a professional engineering background. Every specification published here traces back to a cited manufacturer or retailer source; where something couldn\'t be confirmed, it\'s left out rather than guessed.',
    'LogSplitterLab does not currently conduct hands-on product testing. Reviews are labeled as research-based for exactly that reason, and that will only change with a clear, visible update if it ever does.',
  ],

  // Optional external links. Left empty until the owner supplies real ones —
  // never fabricate a social/professional profile.
  links: {
    linkedin: null,
    twitter: null,
    email: null, // falls back to config.contactEmail if set
  },

  avatarSrc: '/assets/img/author-etay-asher.svg',
  avatarAlt: 'Illustrated avatar of Etay Asher, founder of LogSplitterLab',
  avatarWidth: 160,
  avatarHeight: 160,
};
