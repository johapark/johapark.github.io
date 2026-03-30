# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Local dev server:** `./run` (serves at `localhost:4000` with drafts enabled)
- **CI build:** `./bin/cibuild`
- **Deploy:** `./bin/deploy --user` (builds from `source` branch, deploys compiled site to `master`)

## Architecture

This is a Jekyll-based academic personal website using the **al-folio** theme, deployed to GitHub Pages.

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

**Ruby version:** 2.7.7 (see `.ruby-version`). The `run` script invokes `arch -arch x86_64` for Rosetta compatibility on Apple Silicon.
