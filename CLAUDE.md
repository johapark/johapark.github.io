# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Local dev server:** `./run` (serves at `localhost:4000` with drafts enabled)
- **CI build:** `./bin/cibuild`
- **Deploy:** `./bin/deploy --user` (builds from `source` branch, deploys compiled site to `master`)

## Architecture

This is a Jekyll-based academic personal website using the **al-folio** theme, deployed to GitHub Pages.

**Build stack:** Jekyll 4.x with `jekyll-scholar` 7.x (publications) and `jekyll-sass-converter` 2.x. The site is **not** built by GitHub Pages' managed Jekyll — it self-builds (locally / CI) and pushes compiled HTML to `master`, so it is free of the `github-pages` gem's version pins. Do not re-add `github-pages`.

**Branch strategy:**
- `source` — editable source files (Markdown, Liquid templates, SCSS, config)
- `master` — compiled `_site/` output served by GitHub Pages (do not edit directly)

**Content structure:**
- `_pages/` — main site pages (about, publications, news, etc.)
- `_news/` — individual news items as date-prefixed Markdown files
- `_bibliography/papers.bib` — BibTeX file; publications page is auto-generated from this via `jekyll-scholar`
- `_data/coauthors.yml` — co-author metadata used to auto-link names on the publications page
- `_layouts/` and `_includes/` — Liquid templates

**Key config:** `_config.yml` controls site metadata, plugin settings, jekyll-scholar options, and theme features (dark mode, analytics, math rendering).

**SCSS:** Source in `_sass/`; entry point is `assets/css/main.scss`. Variables and theme colors are in `_sass/_variables.scss` and `_sass/_themes.scss`.

**Frontend assets:** Bootstrap 5.3 is self-hosted at `assets/vendor/bootstrap/` — no CDN, no jQuery (site JS in `assets/js/` is vanilla). Icons are inline SVG includes in `_includes/icons/` (Font Awesome path data, CC BY 4.0 comment kept for attribution); there is no icon webfont. The only external requests are Google Fonts and Google Analytics. Note: `.gitignore` ignores `/vendor/` (Bundler) at the root only — `assets/vendor/` must stay tracked.

**Ruby version:** 3.3.6 (see `.ruby-version`). Compiles natively on both Intel and Apple Silicon, so `./run` works the same on either — no Rosetta/`arch` workaround. `webrick` is pinned in the `Gemfile` because it was removed from Ruby's stdlib in 3.0 and `jekyll serve` requires it.

**Syntax highlighting:** Rouge CSS is vendored at `_sass/_syntax.scss` (imported by `main.scss`). Regenerate with `bundle exec rougify style github > _sass/_syntax.scss`.
