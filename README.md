# johapark.github.io

Personal academic website for Joha Park, PhD. Built with [Jekyll](https://jekyllrb.com/) using the [al-folio](https://github.com/alshedivat/al-folio) theme.

## Setup

Install the project's Ruby (3.3.6, pinned in `.ruby-version`) via `rbenv`. Ruby 3.3 compiles
natively on both Intel and Apple Silicon, so the steps below are identical on either machine:

```bash
# Install rbenv (if not already installed)
brew install rbenv ruby-build
rbenv init  # follow the printed instructions to add rbenv to your shell

# Install the pinned Ruby (reads .ruby-version)
rbenv install 3.3.6

# Install gems
bundle install
```

## Local development

```bash
./run
```

Visit `localhost:4000`.

## Deployment

Push to the `source` branch. GitHub Actions (`.github/workflows/deploy.yml`) builds the site
and force-pushes the compiled output to `master`, which GitHub Pages serves. Never edit
`master` directly. Pull requests against `source` get a build check without deploying.

## Making changes

| What | Where |
|------|-------|
| Bio, profile photo, links | `_pages/about.md` |
| Publications | `_bibliography/papers.bib` (BibTeX) |
| Add a news item | New `.md` file in `_news/` |
| CV PDF | Replace file in `assets/pdf/` |
| Co-author profile links | `_data/coauthors.yml` |
| Site metadata, social links | `_config.yml` |
| Navbar items | `_pages/*.md` (set `nav: true` in front matter) |
