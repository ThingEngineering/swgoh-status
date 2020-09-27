<script lang="ts">
	import { onMount } from 'svelte'

	import { loading as gameLoading, fetch as gameFetch } from './stores/game-data'
	import { loading as playerLoading, fetch as playerFetch } from './stores/player-data'

	import FarmStatus from './components/FarmStatus.svelte'
	import PlayerInfo from './components/PlayerInfo.svelte'

	onMount(() => gameFetch())
	onMount(() => playerFetch())
</script>

<style>
	main {
		text-align: center;
		padding: 0 1em;
		margin: 0 auto;
	}
</style>

<main>
	{#if $gameLoading || $playerLoading}
		<p>LOADING</p>
	{:else}
		<PlayerInfo />
		<FarmStatus />
	{/if}
</main>
