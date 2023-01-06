<script lang="ts">
	import { onMount } from 'svelte'

	import { error as gameError, loading as gameLoading, fetch as gameFetch } from './stores/game-data'
	import { error as playerError, loading as playerLoading, fetch as playerFetch } from './stores/player-data'

	import FarmStatus from './components/FarmStatus.svelte'
	import Footer from './components/Footer.svelte'
	import Header from './components/Header.svelte'

	onMount(() => gameFetch())
	onMount(() => playerFetch())
</script>

<style>
	:global(html, body) {
		position: relative;
		width: 100%;
		height: 100%;
	}
	:global(body) {
		background: #202428;
		color: #EEE;
		margin: 0 auto;
		padding: 0;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	}
	:global(a) {
		color: #00aaff;
		text-decoration: none;
	}
	:global(a:hover) {
		text-decoration: underline;
	}
</style>

<Header />
{#if $gameError || $playerError}
	<p>KABOOM! Something has gone horribly wrong, try reloading the page?</p>
{:else if $gameLoading || $playerLoading}
	<p>LOADING</p>
{:else}
	<FarmStatus />
{/if}
<Footer />
