# Andrey Tondo — Portfolio

Personal portfolio of **Andrey Tondo**, Full Stack Developer (Java, Spring Boot, Angular, React/Next.js, PostgreSQL).

**Live site:** https://andreytondo.github.io/portfolio/

Bilingual (English / Português): the language follows the browser and can be switched on the page.

## What is on the site

- About and skills
- Education (UTFPR) and work experience (CI&T, IDS Software)
- Projects: Delfos, Caçambeiro, DAINF-UTFPR and IDR-Paraná
- Resume download and contact links

## Stack

- React 16 (Create React App) and SCSS
- i18next / react-i18next for translations (`src/locales/en` and `src/locales/pt`)
- GitHub Pages, deployed by GitHub Actions on every push to `master` (`.github/workflows/deploy.yml`)

## Run locally

```bash
npm install -f
npm start
```

The site opens at http://localhost:3000. Production build: `npm run build`.

## Editing the content

- Structure and links: `src/portfolio.js`
- All visible text (both languages): `src/locales/en/translation.json` and `src/locales/pt/translation.json`
- Colors: `src/_globalColor.scss`

## Credits and license

Built on the [developerFolio](https://github.com/saadpasta/developerFolio) template by Saad Pasta, distributed under the GPL-3.0 license (see `LICENSE`).
