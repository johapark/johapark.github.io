# johapark.github.io

Personal academic website for Joha Park, PhD. Built with [Jekyll](https://jekyllrb.com/) using the [al-folio](https://github.com/alshedivat/al-folio) theme.

## Setup

macOS does not ship with Ruby 2.7. Install it via `rbenv`:

```bash
# Install rbenv (if not already installed)
brew install rbenv ruby-build
rbenv init  # follow the printed instructions to add rbenv to your shell

# Install Ruby 2.7.7
rbenv install 2.7.7
rbenv local 2.7.7   # sets this version for the project directory

# Install gems
bundle install
```

This works on both Intel and Apple Silicon Macs.

## Local development

**Intel Mac:**
```bash
./run
```

**Apple Silicon Mac** (`./run` forces x86_64 which conflicts with native ARM Ruby):
```bash
bundle exec jekyll serve --drafts
```

Visit `localhost:4000`.

## Deployment

```bash
./bin/deploy --user
```

Builds from the `source` branch and pushes the compiled site to `master`, which GitHub Pages serves. Never edit `master` directly.

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
