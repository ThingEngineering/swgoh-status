# SW:GoH Status

A simple web app to show event farming status for Star Wars: Galaxy of Heroes players.
Written in [TypeScript](https://www.typescriptlang.org/) and [Svelte](https://svelte.dev)
because I felt like learning some new things.

Live version: https://swgoh.freddie.wtf

## Development setup

1. Install [Node.js](https://nodejs.org/en/) if you haven't already.
2. Run `npm install` in a command prompt/shell.
3. Run `npm run dev` in a command prompt/shell.
4. Visit http://localhost:5000/?player=your_id_here.

## Project structure

Almost everything lives under `src/`:

- `App.svelte` - the "base" Svelte component which defines the initial page structure
- `main.ts` - the TypeScript entry point, just creates the App component
- `components/` - Svelte components, or related CSS/HTML/JS in a single file
- `data/` - static data, currently just the requirements for Galactic Legends
- `stores/` - data stores, a way to abstract retrieving/caching/accessing data from
  [swgoh.gg](https://swgoh.gg)
- `utils/` - various utility functions
