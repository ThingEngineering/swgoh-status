<script lang="ts">
	import { onMount } from 'svelte'

	import { error as gameError, loading as gameLoading, fetch as gameFetch } from './stores/game-data'
	import { error as playerError, loading as playerLoading, fetch as playerFetch } from './stores/player-data'

	import FarmStatus from './components/FarmStatus.svelte'
	import Footer from './components/Footer.svelte'
	import PlayerInfo from './components/PlayerInfo.svelte'

	onMount(() => gameFetch())
	onMount(() => playerFetch())
</script>

<style>
	main {
		text-align: center;
		margin: 0 auto;
		padding: 0;
	}
</style>

<main>
	{#if $gameError || $playerError}
		<p>KABOOM! Something has gone horribly wrong, try reloading the page?</p>
	{:else if $gameLoading || $playerLoading}
		<p>LOADING</p>
	{:else}
		<PlayerInfo />
		<FarmStatus />
	{/if}
	<Footer />
</main>
