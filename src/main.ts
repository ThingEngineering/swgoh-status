/**
 * Initializes the Svelte application.
 *
 * @param {import('./App.svelte').default} App - The Svelte component to be rendered.
 * @param {HTMLElement} target - The DOM element where the application will be mounted.
 *
 * @returns {App} The initialized Svelte application instance.
 */
const initializeSvelteApp = (App, target) => {
	const app = new App({ target });
	return app;
  };
  
  /**
   * Bootstraps the Svelte application.
   *
   * @param {HTMLElement} target - The DOM element where the application will be mounted.
   *
   * @returns {App} The initialized Svelte application instance.
   */
  const bootstrapSvelteApp = (target) => {
	const App = require('./App.svelte').default;
	return initializeSvelteApp(App, target);
  };
  
  /**
   * Main entry point of the application.
   */
  const main = () => {
	const target = document.body;
	const app = bootstrapSvelteApp(target);
	export default app;
  };
  
  main();