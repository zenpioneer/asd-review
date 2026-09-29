# ASD in Children: Diagnostics and Therapy — landing page

Static one-page site (no build step) presenting a research synopsis on the
diagnostics and therapy of autism spectrum disorder in children, with a critical
review of three biological hypotheses (gut microbiota, increased intestinal
permeability, aldehydes).

## Structure

- `index.html` — the page
- `assets/styles.css` — styles (editorial layout, light/dark themes)
- `assets/script.js` — theme toggle, contents rail, scroll-spy, reveal animation
- `assets/fonts/` — self-hosted Inter and Source Serif 4 (SIL OFL 1.1)
- `assets/nature.jpg` — background photo (CC0)
- `assets/favicon.svg` — icon
- `CREDITS.md` — photo and font licenses
- `.nojekyll` — serve files as-is on GitHub Pages

## Local preview

No toolchain required. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Deploy to GitHub Pages

1. Create an empty repository `zenpioneer/asd-review` (no README/gitignore).
2. Push this folder to its `main` branch.
3. Repository → **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`.
4. The site will be available at `https://zenpioneer.github.io/asd-review/`.

## Content notes

- The author block is filled in; contact details may be updated as needed.
- Prevalence figures and the full Vancouver bibliography are being verified;
  the reference list on the page is an initial set of key sources.
