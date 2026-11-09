// Inner page content. Loaded only by page.html, before script.js.
// Each page is a list of blocks, keyed by the old site's page id: pageContent[85] is page.html?id=85
//
// Block types:
//   'text'                                  a plain string is a paragraph
//   { type: 'quote', text }                 big pull quote
//   { type: 'heading', text }               section heading
//   { type: 'list', items: [text, ...] }    bullet list
//   { type: 'tiles', items: [[title, text], ...] }   small info cards
//   { type: 'links', ids: [page id, ...] }  link cards. Labels come from the menu in script.js
//   { type: 'letter', greeting, paragraphs: [...], closing, from: [name, role] }
//
// A page with no entry here shows a placeholder.

const pageContent = {};

// 85: Welcome to Alpina
// Paragraphs 1 and 2 are the old site's words (from the home page excerpt, last words completed).
// Paragraphs 3 and 4 are written from a summary of the old page. Replace them with the original text.
pageContent[85] = [
  { type: 'quote', text: 'Bringing out the best in every child' },

  { type: 'letter',
    greeting: 'Dear Parents,',
    paragraphs: [
      'We are delighted to welcome you to Alpina Schools & Colleges, an institution with a proud educational legacy spanning more than four decades.',
      'Since its founding, Alpina has remained firmly committed to academic excellence while placing equal importance on character development, creativity, and the holistic growth of every student. Our purpose is to nurture confident, capable individuals who are intellectually curious, ethically grounded, and ready for a changing world.',
      'Our faculty and academic leadership are qualified, experienced, and committed to a supportive learning environment. Our affiliations with national and international examining bodies reflect that same commitment to quality and continuous improvement.',
      'We invite you to explore our programmes, our values, and our community. We look forward to a lasting partnership with you in your child’s education.'
    ],
    closing: 'Warm regards,',
    from: ['The Directors', 'Alpina Schools & Colleges']
  },

  { type: 'heading', text: 'At a glance' },
  { type: 'tiles', items: [
    ['Since 1983', 'Over four decades of educational legacy in Bahawalpur.'],
    ['Academic excellence', 'Consistent results, balanced with character development and creativity.'],
    ['Qualified faculty', 'Experienced teachers and leaders in a supportive learning environment.'],
    ['Recognised affiliations', 'Links with national and international examining bodies.']
  ] },

  { type: 'heading', text: 'Continue exploring' },
  { type: 'links', ids: [100, 103, 102, 53] }
];
