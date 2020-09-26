<script lang="ts">
	import { onMount } from 'svelte'
	import { loading, fetch } from './stores/game-data'

	onMount(() => fetch())
</script>

<main>
	<h1>PANTS</h1>
	{#if $loading}
		<p>LOADING</p>
	{:else}
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>