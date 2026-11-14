# Alpina Schools & Colleges: redesign concept

Practice redesign of https://alpina.edu.pk/ (Bahawalpur, Pakistan). Not the official site. Text, logo and photos belong to the school.

HTML, Tailwind CSS 3 and plain JavaScript. No framework.

## Run

    npm install
    npm run dev      # rebuilds output.css when you save
    npm run build    # minified output.css

`output.css` is committed, so the folder also works without Node: open `index.html`, or drop the folder on Netlify.

## Structure

- `index.html` and 42 content pages, one file per page of the old site
- `script.js`: menu data, header and footer (built once from the menu, shared by every page), slider, counters, dropdowns, section menu, form, map
- `input.css`: colour tokens and the few styles Tailwind does not cover
- `tailwind.config.js`: colours point at the CSS variables
- `template.html`: copy it to add a page, then add the file name to `menu` in `script.js`

## Choices

- 39 menu pages grouped into 6 dropdowns, plus a section menu in every page sidebar
- Math captcha replaced by a honeypot field. The form posts to Netlify Forms
- Facebook feed and map load only on click
- Slider pauses on hover and on request, respects reduced motion, hidden slides are `inert`
- Keyboard: skip link, visible focus ring on light and dark surfaces, dropdowns open with Enter or Space and close with Esc
- Only the 4 photos from the old site are used (3 hero slides, 1 about image), reused as banners on a few inner pages. Other pages get a section SVG illustration
- Every page has `noindex` so the concept does not compete with the school's own site. Remove that meta tag to publish

## Deploy

Netlify: publish directory is the project folder, no build command. Forms are detected on deploy.
