# ASD in Children: Diagnostics and Therapy — landing page

Static one-page site (no build step) presenting a research synopsis on the
diagnostics and therapy of autism spectrum disorder in children, with a critical
review of three biological hypotheses (gut microbiota, increased intestinal
permeability, aldehydes).

## Structure

- `index.html` — the page
- `assets/styles.css` — styles (light/dark responsive)
- `assets/script.js` — nav toggle, active-section highlighting, year
- `assets/favicon.svg` — icon
- `.nojekyll` — serve files as-is on GitHub Pages

## Local preview

No toolchain required. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Deploy to GitHub Pages

1. Create an empty repository `muzykantov/asd-review` (no README/gitignore).
2. Push this folder to its `main` branch.
3. Repository → **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`.
4. The site will be available at `https://muzykantov.github.io/asd-review/`.

## Content notes

- The author block and part of the references are placeholders and must be
  completed before publication.
- Prevalence figures and the full Vancouver bibliography are being verified;
  the reference list on the page is an initial set of key sources.
