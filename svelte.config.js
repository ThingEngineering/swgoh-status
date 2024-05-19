/**
 * svelte.config.js
 *
 * This file is a configuration file for the Svelte compiler. It sets up preprocessing options for the Svelte project.
 *
 * @module svelte.config.js
 */

/**
 * @function require
 * @description This is a built-in Node.js function that loads a module from a file.
 * @param {string} moduleName - The name of the module to be loaded.
 * @returns {Object} The module object.
 */

/**
 * @module svelte-preprocess
 * @description This is a preprocessor for Svelte that can be used to transform Svelte code before compilation.
 * @see https://github.com/sveltejs/svelte-preprocess
 */

/**
 * @function preprocess
 * @description This function returns a preprocessor for Svelte.
 * @returns {Function} A function that can be used to preprocess Svelte code.
 */

/**
 * @module.exports
 * @description This is the exported object from the svelte.config.js file.
 * @type {Object} An object containing the preprocessor for Svelte.
 */

/**
 * @function module.exports.preprocess
 * @description This function returns the preprocessor for Svelte that was obtained from the 'svelte-preprocess' module.
 * @returns {Function} The preprocessor function for Svelte.
 */

const preprocess = require('svelte-preprocess');

module.exports = {
    preprocess: preprocess()
};
