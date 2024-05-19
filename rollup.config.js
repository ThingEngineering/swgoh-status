/**
 * Import necessary modules for the build process.
 */
import fs from 'fs';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import terser from '@rollup/plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import posthtml from 'posthtml';
import { hash } from 'posthtml-hash';
import {rimraf} from 'rimraf';
import copy from 'rollup-plugin-copy';

/**
 * Check if the build is in production mode.
 * @type {boolean}
 */
const production = !process.env.ROLLUP_WATCH;

/**
 * Function to serve the application during development.
 * @returns {{writeBundle: writeBundle}}
 */
function serve() {
  let server;

  /**
   * Function to terminate the server process.
   */
  function toExit() {
    if (server) server.kill(0);
  }

  return {
    /**
     * Write the bundle and start the server.
     */
    writeBundle() {
      if (server) return;
      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
      });

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    }
  };
}

/**
 * Function to hash the assets during the build process.
 * @returns {{buildStart: buildStart, writeBundle: writeBundle}}
 */
function hashAssets() {
  return {
    /**
     * Remove the build directory before starting the build process.
     */
    buildStart() {
      rimraf.sync('build');
    },

    /**
     * Hash the assets and update the index.html file.
     */
    writeBundle() {
      posthtml([
        hash({ path: 'build/' }),
      ])
      .process(fs.readFileSync('./build/index.html'))
      .then((result) => fs.writeFileSync('./build/index.html', result.html));
    }
  };
}

/**
 * Export the build configuration for Rollup.
 * @type {{input: string, output: {sourcemap: boolean, format: string, name: string, file: string}, plugins: Array, watch: {clearScreen: boolean}}}
 */
export default {
  /**
   * Input file for the build process.
   * @type {string}
   */
  input: 'src/main.ts',

  /**
   * Output configuration for the build process.
   * @type {{sourcemap: boolean, format: string, name: string, file: string}}
   */
  output: {
    /**
     * Enable source maps for development builds.
     * @type {boolean}
     */
    sourcemap: !production,

    /**
     * Format the output bundle as an IIFE script.
     * @type {string}
     */
    format: 'iife',

    /**
     * Set the name of the output bundle.
     * @type {string}
     */
    name: 'app',

    /**
     * Set the file name for the output bundle.
     * @type {string}
     */
    file: 'build/bundle.[hash].js'
  },

  /**
   * Array of plugins to be used during the build process.
   * @type {Array}
   */
  plugins: [
    /**
     * Copy public files to the build directory.
     * @type {{targets: Array}}
     */
    {
      targets: [
        {
          src: 'public/*',
          dest: 'build'
        }
      ]
    },

    /**
     * Compile Svelte components and extract CSS.
     * @type {{dev: boolean, css: Function, preprocess: Function}}
     */
    svelte({
      /**
       * Enable runtime checks for development builds.
       * @type {boolean}
       */
      dev: !production,

      /**
       * Extract any component CSS into a separate file.
       * @type {Function}
       */
      css: css => {
        css.write('bundle.[hash].css', !production);
      },

      /**
       * Preprocess Svelte components with additional plugins.
       * @type {Function}
       */
      preprocess: sveltePreprocess()
    }),

    /**
     * Resolve external dependencies and dedupe 'svelte' package.
     * @type {{browser: boolean, dedupe: Array}}
     */
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),

    /**
     * Transpile TypeScript code.
     * @type {{sourceMap: boolean, inlineSources: boolean}}
     */
    typescript({
      sourceMap: !production,
      inlineSources: !production
    }),

    /**
     * Serve the application during development.
     * @type {Function}
     */
    !production && serve(),

    /**
     * Watch the public directory and refresh the browser during development.
     * @type {{livereload: Function, dest: string}}
     */
    !production && {
      livereload: 'build'
    },

    /**
     * Minify the output bundle for production builds.
     * @type {Function}
     */
    production && terser(),

    /**
     * Hash the assets and update the index.html file.
     * @type {{buildStart: Function, writeBundle: Function}}
     */
    production && hashAssets()
  ],

  /**
   * Configure the watch mode for the build process.
   * @type {{clearScreen: boolean}}
   */
  watch: {
    clearScreen: false
  }
};