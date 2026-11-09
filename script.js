// Alpina redesign. Plain JavaScript, no libraries.

// 1. Menu data. Each group has a name and a list of [page id, label].
// The ids match the old site, e.g. https://alpina.edu.pk/page.php?id=85
const menu = [
  { name: 'About', links: [
    [85, 'Welcome to Alpina'], [102, 'Our History and Legacy'], [100, 'Vision, Mission and Values'],
    [89, 'School Objectives'], [80, 'The Alpina Profile'], [81, 'The School Insignia and Identity'],
    [97, 'Corporate Social Responsibility'], [98, 'Recent Honours and Awards'] ] },
  { name: 'Academics', links: [
    [103, 'Academic Philosophy'], [104, 'Pre-Primary Programme'], [105, 'Primary and Middle School'],
    [106, 'Secondary School'], [95, 'GCE O Level Programme'], [96, 'BISE Matriculation and Intermediate'],
    [90, 'Faculty and Academic Leadership'], [107, 'Digital Learning and Information Technology'] ] },
  { name: 'Admission', links: [
    [53, 'Admission Process'], [66, 'Fee Schedule'], [59, 'Fee Concessions and Scholarships'],
    [92, 'Teaching Times and Academic Calendar'], [82, 'School Books and Uniform Guidelines'],
    [119, 'Admission Guideline'] ] },
  { name: 'Student Life', links: [
    [108, 'Facilities and Campus Life'], [109, 'Co-Curricular and Extracurricular Activities'],
    [110, 'Sports and Physical Education'], [111, 'Arts, Music and School Band'],
    [112, 'Expeditions, Trips and Picnics'], [99, 'Parental Involvement'] ] },
  { name: 'Governance', links: [
    [75, 'Message from the Directors'], [77, 'Message from Pre-Primary Directress'],
    [113, 'Academic Leadership'], [88, 'School Administration'],
    [101, 'School Policies and Regulations'], [118, 'Faculty and Employment'] ] },
  { name: 'Contact', links: [
    [86, 'Contact Us'], [114, 'Head Office'], [115, 'Campus Locations'],
    [116, 'Office Hours'], [117, 'Enquiries'] ] }
];

// 2. Header. Built here so both pages share the same menu.
function buildHeader() {
  let desktop = '';
  let mobile = '';

  menu.forEach(function (group, index) {
    let items = '';
    group.links.forEach(function (link) {
      items += '<a href="page.html?id=' + link[0] + '" class="block px-4 py-2 text-sm hover:bg-glacier smooth">' + link[1] + '</a>';
    });

    // The last two dropdowns open to the left so they stay on screen
    const side = index >= menu.length - 2 ? 'right-0' : 'left-0';

    // Desktop: dropdown opens on hover or keyboard focus
    desktop += '<div class="relative group">' +
      '<button class="px-3 py-2 text-sm font-medium rounded-lg hover:bg-glacier smooth" aria-haspopup="true">' + group.name + '</button>' +
      '<div class="absolute ' + side + ' top-full hidden group-hover:block group-focus-within:block w-72 bg-surface border border-line rounded-xl py-2 lift z-50">' + items + '</div>' +
      '</div>';

    // Mobile: each group opens and closes, so the menu stays short
    mobile += '<details class="border-t border-line">' +
      '<summary class="py-3 font-display font-semibold cursor-pointer">' + group.name + '</summary>' +
      '<div class="pb-2">' + items + '</div></details>';
  });

  return '' +
    '<div class="bg-surface border-b border-line">' +
      '<div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">' +
        '<a href="index.html" class="shrink-0"><img src="logo.png" alt="Alpina School &amp; Colleges" class="h-7 sm:h-10 w-auto"></a>' +
        '<nav class="hidden lg:flex items-center gap-1" aria-label="Main">' + desktop + '</nav>' +
        '<a href="tel:+92622874852" class="hidden xl:block text-sm"><span class="text-muted">Call Our Experts</span> <span class="font-semibold">+92 62 2874852</span></a>' +
        '<button id="menu-button" class="lg:hidden px-4 py-2 border border-line rounded-full text-sm font-medium" aria-expanded="false" aria-controls="mobile-menu">Menu</button>' +
      '</div>' +
      // If the open menu is taller than the screen, it scrolls inside itself
      '<div id="mobile-menu" class="hidden lg:hidden px-6 pb-6 max-h-[75vh] overflow-y-auto">' + mobile +
        '<p class="pt-4 border-t border-line text-sm">Call Our Experts <a href="tel:+92622874852" class="font-semibold">+92 62 2874852</a></p></div>' +
    '</div>';
}

// Thin blue bar above the header. It scrolls away, only the white bar stays on top.
function buildTopStrip() {
  return '<div class="max-w-6xl mx-auto px-6 py-2 flex justify-between gap-6">' +
    '<span>16-B, Mohammad Hussain Road, Model Town A, Bahawalpur, PAKISTAN</span>' +
    '<span><a href="mailto:info@alpina.edu.pk" class="hover:underline">info@alpina.edu.pk</a> &nbsp; <a href="https://www.facebook.com/alpinaschools" class="hover:underline">Facebook</a></span>' +
    '</div>';
}

// 3. Footer. Same content as the old site, but short: the Facebook feed loads only on click.
function buildFooter() {
  return '' +
    '<div class="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-10 text-sm">' +
      '<div class="lg:col-span-5">' +
        '<p class="font-display font-semibold text-2xl leading-snug max-w-xs">Bringing out the best in every child</p>' +
        '<p class="mt-6 font-display font-semibold">Contact Info</p>' +
        '<dl class="mt-3 space-y-3 text-white/70">' +
          '<div><dt class="font-medium text-white">Address</dt><dd>16-B, Mohammad Hussain Road, Model Town A, Bahawalpur, PAKISTAN</dd></div>' +
          '<div><dt class="font-medium text-white">Mail Us</dt><dd><a class="hover:underline" href="mailto:info@alpina.edu.pk">info@alpina.edu.pk</a></dd></div>' +
          '<div><dt class="font-medium text-white">Telephone</dt><dd><a class="hover:underline" href="tel:+92622874852">+92 62 2874852</a></dd></div>' +
        '</dl></div>' +
      '<div class="lg:col-span-3"><p class="font-display font-semibold">Quick Links</p>' +
        '<ul class="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-white/70">' +
          '<li><a class="hover:underline" href="page.html?id=80">About Us</a></li>' +
          '<li><a class="hover:underline" href="page.html?id=80">Features</a></li>' +
          '<li><a class="hover:underline" href="testimonials.html">Testimonials</a></li>' +
          '<li><a class="hover:underline" href="faqs.html">FAQ\'s</a></li>' +
          '<li><a class="hover:underline" href="news.html">News</a></li>' +
          '<li><a class="hover:underline" href="page.html?id=86">Contact</a></li>' +
          '<li><a class="hover:underline" href="page.html?id=118">Careers at Alpina</a></li></ul></div>' +
      '<div class="lg:col-span-4"><p class="font-display font-semibold">Live Feed</p>' +
        '<div id="feed-box" class="mt-3 rounded-xl border border-white/20 p-5">' +
          '<p class="text-white/70">Alpina Schools on Facebook</p>' +
          '<div class="mt-4 flex flex-wrap gap-3">' +
            '<button id="feed-button" class="bg-white text-brand font-semibold px-5 py-2.5 rounded-full hover:bg-glacier smooth">Show Live Feed</button>' +
            '<a href="https://www.facebook.com/alpinaschools" class="px-5 py-2.5 rounded-full border border-white/40 hover:bg-white/10 smooth">Open Facebook</a>' +
          '</div></div></div>' +
    '</div>' +
    '<div class="border-t border-white/10"><p class="max-w-6xl mx-auto px-6 py-5 text-xs text-white/60">' +
      '&copy; ' + new Date().getFullYear() + ' Alpina Schools &amp; Colleges. All Rights Reserved. Redesign concept for practice, not the official site.</p></div>';
}

// Put header and footer on the page
document.getElementById('top-strip').innerHTML = buildTopStrip();
document.getElementById('site-header').innerHTML = buildHeader();
document.getElementById('site-footer').innerHTML = buildFooter();

// Facebook feed: the iframe is added only when the button is clicked
document.getElementById('feed-button').addEventListener('click', function () {
  document.getElementById('feed-box').innerHTML =
    '<iframe title="Alpina Schools on Facebook" class="max-w-full border-0" width="340" height="360" ' +
    'src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Falpinaschools&amp;tabs=timeline&amp;width=340&amp;height=360&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true"></iframe>';
});

// 4. Mobile menu open / close
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
menuButton.addEventListener('click', function () {
  const wasOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  menuButton.setAttribute('aria-expanded', String(!wasOpen));
});

// 5. Numbers count up once, when they scroll into view
const counters = document.querySelectorAll('[data-count]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function countUp(element) {
  const target = Number(element.dataset.count);
  if (reduceMotion) { element.textContent = target; return; }
  const startTime = performance.now();
  const duration = 1200; // milliseconds
  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    element.textContent = Math.round(target * progress);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

if (counters.length) {
  const watcher = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      countUp(entry.target);
      watcher.unobserve(entry.target);
    });
  });
  counters.forEach(function (element) { watcher.observe(element); });
}

// 6. Contact form (home page only)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Bots fill the hidden "website" field, real people do not
    if (form.elements['website'].value !== '') return;
    // TODO: send the form data to Formspree or Netlify Forms here
    const note = document.getElementById('form-message');
    note.textContent = 'Message sent. The school office will reply by email or phone.';
    form.reset();
  });
}

// 7. Inner page (page.html?id=85). Title comes from the menu list above.
// The page content comes from pages.js (pageContent[id]).
const pageBody = document.getElementById('page-body');
if (pageBody) {
  const id = new URLSearchParams(window.location.search).get('id');
  let title = 'Page not found';
  let groupName = '';
  const labels = {}; // page id -> label, used by 'links' blocks
  menu.forEach(function (group) {
    group.links.forEach(function (link) {
      labels[link[0]] = link[1];
      if (String(link[0]) === id) { title = link[1]; groupName = group.name; }
    });
  });
  document.title = title + ' | Alpina Schools & Colleges';
  document.getElementById('page-title').textContent = title;
  if (groupName) document.getElementById('page-group').textContent = ' › ' + groupName;

  // Make one element with classes and text
  function make(tag, classes, text) {
    const element = document.createElement(tag);
    element.className = classes;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  // Turn one content block (see pages.js) into an element
  function renderBlock(block) {
    if (typeof block === 'string') {
      return make('p', 'text-lg leading-8 text-muted max-w-prose', block);
    }

    if (block.type === 'quote') {
      return make('p', 'border-l-4 border-brand pl-5 sm:pl-6 font-display font-semibold text-2xl sm:text-3xl leading-snug text-brand', block.text);
    }

    if (block.type === 'heading') {
      return make('h2', 'pt-4 font-display font-semibold text-2xl tracking-tight text-brand', block.text);
    }

    if (block.type === 'list') {
      const list = make('ul', 'list-disc pl-6 space-y-2 text-lg leading-8 text-muted max-w-prose');
      block.items.forEach(function (text) { list.appendChild(make('li', '', text)); });
      return list;
    }

    if (block.type === 'tiles') {
      const grid = make('ul', 'grid sm:grid-cols-2 gap-4');
      block.items.forEach(function (item) {
        const tile = make('li', 'bg-glacier rounded-xl p-5');
        tile.appendChild(make('p', 'font-display font-semibold text-lg text-brand', item[0]));
        tile.appendChild(make('p', 'mt-1 text-muted leading-7', item[1]));
        grid.appendChild(tile);
      });
      return grid;
    }

    if (block.type === 'links') {
      const grid = make('ul', 'grid sm:grid-cols-2 gap-4');
      block.ids.forEach(function (linkId) {
        const item = make('li', '');
        const link = make('a', 'block h-full border-l-4 border-brand bg-surface px-5 py-4 font-display font-semibold hover:bg-glacier smooth', labels[linkId] || 'Page ' + linkId);
        link.href = 'page.html?id=' + linkId;
        item.appendChild(link);
        grid.appendChild(item);
      });
      return grid;
    }

    if (block.type === 'letter') {
      const card = make('div', 'bg-surface border border-line rounded-2xl p-6 sm:p-10 lift');
      card.appendChild(make('p', 'font-display font-semibold text-xl', block.greeting));
      block.paragraphs.forEach(function (text) {
        card.appendChild(make('p', 'mt-5 text-lg leading-8 text-muted', text));
      });
      card.appendChild(make('p', 'mt-8 text-muted', block.closing));
      card.appendChild(make('p', 'mt-1 font-display font-semibold text-brand', block.from[0]));
      card.appendChild(make('p', 'text-sm text-muted', block.from[1]));
      return card;
    }

    return make('p', 'text-muted', ''); // unknown block type: show nothing
  }

  // pages.js may be missing, so check before using it
  const blocks = (typeof pageContent !== 'undefined' && pageContent[id]) ||
    ['Page content goes here. Copy it from https://alpina.edu.pk/page.php?id=' + id];
  blocks.forEach(function (block) { pageBody.appendChild(renderBlock(block)); });
}

// 8. Hero slider (home page only)
const slider = document.getElementById('slider');
if (slider) {
  const slides = slider.querySelectorAll('[data-slide]');
  const dots = slider.querySelectorAll('[data-dot]');
  const pauseButton = document.getElementById('slider-pause');
  let current = 0;
  let timer = null;
  let paused = reduceMotion; // start paused if the person turned animations off

  // Show one slide, hide the others
  function showSlide(number) {
    current = (number + slides.length) % slides.length; // wraps around
    slides.forEach(function (slide, index) {
      const isActive = index === current;
      slide.classList.toggle('is-active', isActive);
      slide.toggleAttribute('inert', !isActive); // hidden slides cannot get keyboard focus
      slide.setAttribute('aria-hidden', String(!isActive));
    });
    dots.forEach(function (dot, index) {
      dot.setAttribute('aria-current', String(index === current));
    });
  }

  // Auto play: next slide every 6 seconds, but not while the mouse is over the slider
  let hovering = false;
  function stopTimer() { clearInterval(timer); }
  function startTimer() {
    stopTimer();
    if (!paused) {
      timer = setInterval(function () {
        if (!hovering) showSlide(current + 1);
      }, 6000);
    }
  }

  document.getElementById('slider-next').addEventListener('click', function () { showSlide(current + 1); startTimer(); });
  document.getElementById('slider-prev').addEventListener('click', function () { showSlide(current - 1); startTimer(); });
  dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () { showSlide(index); startTimer(); });
  });

  // Pause / Play button
  function updatePauseButton() { pauseButton.textContent = paused ? 'Play' : 'Pause'; }
  pauseButton.addEventListener('click', function () {
    paused = !paused;
    hovering = false; // pressing the button wins over the mouse being on the slider
    updatePauseButton();
    startTimer();
  });

  // Hold the slide while the mouse is on the slider
  slider.addEventListener('mouseenter', function () { hovering = true; });
  slider.addEventListener('mouseleave', function () { hovering = false; });

  // Arrow keys
  slider.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') showSlide(current + 1);
    if (event.key === 'ArrowLeft') showSlide(current - 1);
  });

  showSlide(0);
  updatePauseButton();
  startTimer();
}
