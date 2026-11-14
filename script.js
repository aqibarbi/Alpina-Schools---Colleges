// Alpina redesign. Plain JavaScript, no libraries.

// 1. Menu data. Each group has a name and a list of [page id, label, file name].
// The ids match the old site, e.g. https://alpina.edu.pk/page.php?id=85
// The file name is only for pages that are built (their own .html file).
// Pages without a file name open the placeholder page.html?id=...
const menu = [
  { name: 'About', links: [
    [85, 'Welcome to Alpina', 'welcome-to-alpina.html'], [102, 'Our History and Legacy', 'our-history-and-legacy.html'], [100, 'Vision, Mission and Values', 'vision-mission-and-values.html'],
    [89, 'School Objectives', 'school-objectives.html'], [80, 'The Alpina Profile', 'the-alpina-profile.html'], [81, 'The School Insignia and Identity', 'the-school-insignia-and-identity.html'],
    [97, 'Corporate Social Responsibility', 'corporate-social-responsibility.html'], [98, 'Recent Honours and Awards', 'recent-honours-and-awards.html'] ] },
  { name: 'Academics', links: [
    [103, 'Academic Philosophy', 'academic-philosophy.html'], [104, 'Pre-Primary Programme', 'pre-primary-programme.html'], [105, 'Primary and Middle School', 'primary-and-middle-school.html'],
    [106, 'Secondary School', 'secondary-school.html'], [95, 'GCE O Level Programme', 'gce-o-level-programme.html'], [96, 'BISE Matriculation and Intermediate', 'bise-matriculation-and-intermediate.html'],
    [90, 'Faculty and Academic Leadership', 'faculty-and-academic-leadership.html'], [107, 'Digital Learning and Information Technology', 'digital-learning-and-information-technology.html'] ] },
  { name: 'Admission', links: [
    [53, 'Admission Process', 'admission-process.html'], [66, 'Fee Schedule', 'fee-schedule.html'], [59, 'Fee Concessions and Scholarships', 'fee-concessions-and-scholarships.html'],
    [92, 'Teaching Times and Academic Calendar', 'teaching-times-and-academic-calendar.html'], [82, 'School Books and Uniform Guidelines', 'school-books-and-uniform-guidelines.html'],
    [119, 'Admission Guideline', 'admission-guideline.html'] ] },
  { name: 'Student Life', links: [
    [108, 'Facilities and Campus Life', 'facilities-and-campus-life.html'], [109, 'Co-Curricular and Extracurricular Activities', 'co-curricular-and-extracurricular-activities.html'],
    [110, 'Sports and Physical Education', 'sports-and-physical-education.html'], [111, 'Arts, Music and School Band', 'arts-music-and-school-band.html'],
    [112, 'Expeditions, Trips and Picnics', 'expeditions-trips-and-picnics.html'], [99, 'Parental Involvement', 'parental-involvement.html'] ] },
  { name: 'Governance', links: [
    [75, 'Message from the Directors', 'message-from-the-directors.html'], [77, 'Message from Pre-Primary Directress', 'message-from-pre-primary-directress.html'],
    [113, 'Academic Leadership', 'academic-leadership.html'], [88, 'School Administration', 'school-administration.html'],
    [101, 'School Policies and Regulations', 'school-policies-and-regulations.html'], [118, 'Faculty and Employment', 'faculty-and-employment.html'] ] },
  { name: 'Contact', links: [
    [86, 'Contact Us', 'contact-us.html'], [114, 'Head Office', 'head-office.html'], [115, 'Campus Locations', 'campus-locations.html'],
    [116, 'Office Hours', 'office-hours.html'], [117, 'Enquiries', 'enquiries.html'] ] }
];

// 2. Header. Built here so every page shares the same menu.
function pageUrl(link) {
  return link[2];
}

function buildHeader() {
  let desktop = '';
  let mobile = '';

  menu.forEach(function (group, index) {
    let items = '';
    group.links.forEach(function (link) {
      items += '<a href="' + pageUrl(link) + '" class="block px-4 py-2.5 text-sm hover:bg-glacier smooth">' + link[1] + '</a>';
    });

    // The last two dropdowns open to the left so they stay on screen
    const side = index >= menu.length - 2 ? 'right-0' : 'left-0';

    // Desktop: dropdown opens on hover or keyboard focus
    desktop += '<div class="relative dd">' +
      '<button class="px-3 py-2 text-sm font-medium rounded-lg hover:bg-glacier smooth" aria-haspopup="true" aria-expanded="false">' + group.name + '</button>' +
      '<div class="absolute ' + side + ' top-full dd-panel w-72 bg-surface border border-line rounded-2xl py-2 lift z-50">' + items + '</div>' +
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
        '<a href="admission-process.html" class="hidden lg:inline-flex shrink-0 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-deep smooth">Admissions</a>' +
        '<button id="menu-button" class="lg:hidden px-4 py-2 border border-line rounded-full text-sm font-medium" aria-expanded="false" aria-controls="mobile-menu">Menu</button>' +
      '</div>' +
      // If the open menu is taller than the screen, it scrolls inside itself
      '<div id="mobile-menu" class="hidden lg:hidden px-6 pb-6 max-h-[75vh] overflow-y-auto">' + '<a href="admission-process.html" class="block mt-2 mb-4 text-center bg-brand text-white font-semibold px-5 py-3 rounded-full">Admissions</a>' + mobile +
        '<p class="pt-4 border-t border-line text-sm">Call Our Experts <a href="tel:+92622874852" class="font-semibold">+92 62 2874852</a></p></div>' +
    '</div>';
}

// Thin blue bar above the header. It scrolls away, only the white bar stays on top.
function buildTopStrip() {
  return '<div class="max-w-6xl mx-auto px-6 py-2 flex justify-between gap-6">' +
    '<span>16-B, Muhammad Hussain Road, Model Town A, Bahawalpur, PAKISTAN</span>' +
    '<span><a href="tel:+92622874852" class="hover:underline">+92 62 2874852</a> &nbsp; <a href="mailto:info@alpina.edu.pk" class="hover:underline">info@alpina.edu.pk</a> &nbsp; <a href="https://www.facebook.com/alpinaschools" class="hover:underline">Facebook</a></span>' +
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
          '<div><dt class="font-medium text-white">Address</dt><dd>16-B, Muhammad Hussain Road, Model Town A, Bahawalpur, PAKISTAN</dd></div>' +
          '<div><dt class="font-medium text-white">Mail Us</dt><dd><a class="hover:underline" href="mailto:info@alpina.edu.pk">info@alpina.edu.pk</a></dd></div>' +
          '<div><dt class="font-medium text-white">Telephone</dt><dd><a class="hover:underline" href="tel:+92622874852">+92 62 2874852</a></dd></div>' +
        '</dl></div>' +
      '<div class="lg:col-span-3"><p class="font-display font-semibold">Quick Links</p>' +
        '<ul class="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-white/70">' +
          '<li><a class="hover:underline" href="the-alpina-profile.html">About Us</a></li>' +
          '<li><a class="hover:underline" href="fee-schedule.html">Fee Schedule</a></li>' +
          '<li><a class="hover:underline" href="testimonials.html">Testimonials</a></li>' +
          '<li><a class="hover:underline" href="faqs.html">FAQ\'s</a></li>' +
          '<li><a class="hover:underline" href="news.html">News</a></li>' +
          '<li><a class="hover:underline" href="contact-us.html">Contact</a></li>' +
          '<li><a class="hover:underline" href="faculty-and-employment.html">Careers at Alpina</a></li></ul></div>' +
      '<div class="lg:col-span-4"><p class="font-display font-semibold">Live Feed</p>' +
        '<div id="feed-box" class="mt-3 rounded-2xl border border-white/20 p-5">' +
          '<p class="text-white/70">Alpina Schools on Facebook</p>' +
          '<div class="mt-4 flex flex-wrap gap-3">' +
            '<button id="feed-button" class="bg-white text-brand font-semibold px-5 py-2.5 rounded-full hover:bg-glacier smooth">Show Live Feed</button>' +
            '<a href="https://www.facebook.com/alpinaschools" class="px-5 py-2.5 rounded-full border border-white/40 hover:bg-white/10 smooth">Open Facebook</a>' +
          '</div></div></div>' +
    '</div>' +
    '<div class="border-t border-white/10"><p class="max-w-6xl mx-auto px-6 py-5 text-xs text-white/60">' +
      '&copy; ' + new Date().getFullYear() + ' Alpina Schools &amp; Colleges. All Rights Reserved. Redesign concept for practice, not the official site. Designed by <a href="https://portfolio-muhammad-aqibjaved.netlify.app" class="underline hover:text-white">Muhammad Aqib Javed</a>.</p></div>';
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
  if (reduceMotion) { element.textContent = target.toLocaleString('en-US'); return; }
  const startTime = performance.now();
  const duration = 1200; // milliseconds
  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    element.textContent = Math.round(target * progress).toLocaleString('en-US');
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
    const note = document.getElementById('form-message');
    note.textContent = 'Sending...';
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(form)).toString() })
      .then(function (response) {
        if (!response.ok) throw new Error('Request failed');
        note.textContent = 'Message sent. The school office will reply by email or phone.';
        form.reset();
      })
      .catch(function () {
        note.textContent = 'Could not send. Please call +92 62 2874852 or email info@alpina.edu.pk.';
      });
  });
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

// 9. Dropdowns: click toggles, Esc and outside click close
const dropdowns = document.querySelectorAll('.dd');
function closeDropdowns(except) {
  dropdowns.forEach(function (dd) {
    if (dd === except) return;
    dd.classList.remove('is-open');
    dd.querySelector('button').setAttribute('aria-expanded', 'false');
  });
}
dropdowns.forEach(function (dd) {
  const button = dd.querySelector('button');
  button.addEventListener('click', function (event) {
    event.stopPropagation();
    const open = dd.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    closeDropdowns(dd);
  });
});
document.addEventListener('click', function () { closeDropdowns(); });
document.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeDropdowns(); });

// 10. Section menu in the sidebar of inner pages (same group as the current page)
let here = window.location.pathname.split('/').pop() || 'index.html';
if (here.indexOf('.') === -1) here += '.html';
const sidebar = document.querySelector('main aside');
const currentGroup = menu.find(function (group) {
  return group.links.some(function (link) { return link[2] === here; });
});
if (sidebar && currentGroup) {
  let list = '';
  currentGroup.links.forEach(function (link) {
    const on = link[2] === here;
    list += '<li><a href="' + link[2] + '"' + (on ? ' aria-current="page"' : '') + ' class="block rounded-lg px-3 py-2 text-sm smooth ' + (on ? 'bg-glacier font-semibold text-brand' : 'hover:bg-glacier') + '">' + link[1] + '</a></li>';
  });
  sidebar.insertAdjacentHTML('afterbegin', '<nav aria-label="' + currentGroup.name + ' pages" class="mb-6 pb-6 border-b border-line"><p class="font-display font-semibold text-lg">' + currentGroup.name + '</p><ul class="mt-3 space-y-1">' + list + '</ul></nav>');
}

// 11. Mobile bar: call and admissions stay one tap away
document.body.classList.add('pb-16', 'md:pb-0');
document.body.insertAdjacentHTML('beforeend', '<div class="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 bg-surface border-t border-line p-3"><a href="tel:+92622874852" class="text-center rounded-full border border-line py-3 text-sm font-semibold smooth">Call</a><a href="admission-process.html" class="text-center rounded-full bg-brand text-white py-3 text-sm font-semibold smooth">Admissions</a></div>');

// 12. Map loads only on click (same idea as the Facebook feed)
const mapButton = document.getElementById('map-button');
if (mapButton) {
  mapButton.addEventListener('click', function () {
    document.getElementById('map-box').innerHTML = '<iframe title="Alpina head office map" class="w-full h-80 rounded-xl border-0" loading="lazy" src="https://www.google.com/maps?q=16-B+Muhammad+Hussain+Road+Model+Town+A+Bahawalpur&output=embed"></iframe>';
  });
}

// 13. Campus map: one iframe, loads on click, changes with the select
const campusSelect = document.getElementById('campus-select');
if (campusSelect) {
  const frame = document.getElementById('campus-map-frame');
  const showCampusMap = function () {
    frame.innerHTML = '<iframe title="Campus map" class="w-full h-80 rounded-xl border-0" loading="lazy" src="https://www.google.com/maps?q=' + encodeURIComponent(campusSelect.value) + '&output=embed"></iframe>';
  };
  document.getElementById('campus-map-button').addEventListener('click', showCampusMap);
  campusSelect.addEventListener('change', function () { if (frame.querySelector('iframe')) showCampusMap(); });
}
