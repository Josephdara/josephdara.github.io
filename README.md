# Joseph Olutimehin — portfolio

A static portfolio for josephdara.com. No package installation or build step is required.

## Preview locally

Run `python3 -m http.server 8080 --bind 127.0.0.1` from this directory, then visit http://127.0.0.1:8080.

## Content

- `index.html`: projects, all six experience entries, article cards, skills, credentials, speaking, and contact information.
- `styles.css`: responsive layout and shared light/dark color tokens.
- `theme.js`: System / Light / Dark selector. Explicit preferences are stored under `jd-appearance`; blocked storage does not prevent switching themes. System mode follows the operating system through CSS, including without JavaScript.
- `assets/articles/`: optimized copies of the original article cover images.
- `Joseph_Olutimehin_Resume.pdf`: existing résumé download.

To add an article, duplicate an `article.article-card` inside `#writing`. Update its direct URL, image, title, category, and short summary. Cards are plain HTML, remain usable without JavaScript, and open the original article in a new tab. No Hashnode API or embedded third-party script is used.

The four covers were sourced from each article's published `og:image` metadata on 6 September 2026. The three Stablecoin Whale Monitor articles share the same original cover.

- https://josephdara.hashnode.dev/gcp-swm-1-vm
- https://josephdara.hashnode.dev/gcp-swm-2-cloudrun-gke
- https://josephdara.hashnode.dev/gcp-swm-3-terraform
- https://josephdara.hashnode.dev/networking-psc

Fonts are DM Sans and Instrument Serif, loaded through Google Fonts with local system fallbacks. Article images are served locally.

This retains the existing static hosting structure; publishing uses the repository's existing deployment process.
