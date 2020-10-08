# SW:GoH Status

A simple web app to show event farming status for Star Wars: Galaxy of Heroes players using the [SWGOH.GG](https://swgoh.gg) API. Written in [TypeScript](https://www.typescriptlang.org/) and [Svelte](https://svelte.dev)
because I felt like learning some new things.

Live version: https://swgoh.freddie.wtf

## Development setup

1. Install [Node.js](https://nodejs.org/en/) if you haven't already.
2. Run `npm install` in a command prompt/shell.
3. Run `npm run dev` in a command prompt/shell.
4. Visit http://localhost:5000/?player=your_id_here.

## Project structure

Almost everything lives under `src/`:

- `main.ts` - the TypeScript entry point, creates the App component
- `App.svelte` - the "base" Svelte component, defines the initial page structure
- `components/` - Svelte components (CSS/HTML/JS in a single file)
- `data/` - static data, currently just farm requirements
- `stores/` - data stores (abstracts retrieving/caching/accessing data)
- `things/` - classes, mostly
- `utils/` - various utility functions
