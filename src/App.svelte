<script lang="ts">
	import { onMount } from 'svelte'
	import gameData from './stores/game-data'
	import playerData from './stores/player-data'

	import PlayerInfo from './components/PlayerInfo.svelte'

	onMount(() => gameData.fetch())
	onMount(() => playerData.fetch())
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>

<main>
	{#if gameData.$loading || playerData.$loading}
		<p>LOADING</p>
	{:else}
		<PlayerInfo />
	{/if}
</main>
