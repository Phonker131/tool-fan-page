# Tool Fan Page

A fan-made educational website about Tool, built with React and Vite. The project demonstrates client-side routing, reusable components, and rendering content from local JSON data.

## Features
- Home, discography, and band member pages.
- Album cards and a modal component.
- Spotify search links.
- Tailwind CSS styling.

## Stack
React 19, React Router 7, Vite 7, JavaScript, Tailwind CSS 3, ESLint.

## Run locally
Use Node.js 22.12 or newer.
```sh
git clone https://github.com/Phonker131/tool-fan-page.git
cd tool-fan-page
npm install
npm run dev
```

## Checks and build
```sh
npm run lint
npm run build
npm run preview
```
These are available project commands; this documentation update does not certify that they pass.

## Project structure
| Path | Purpose |
| --- | --- |
| `src/pages/` | Home, discography, and members |
| `src/components/` | Shared interface components |
| `src/utils/` | Data loading, covers, and Spotify links |
| `public/db/` | Album and member JSON data |

## Deployment notes
A production host must serve `index.html` for client-side routes such as `/discography`. This is an unofficial educational fan project.

## License
See [LICENSE](LICENSE).
