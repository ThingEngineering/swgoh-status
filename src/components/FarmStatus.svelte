<script>
    import legends from '../data/galactic-legends'

    import Farm from './Farm.svelte'
</script>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(auto-fit, 27em);
        grid-gap: 2em;
        justify-content: center;
        margin: 0 1em;
    }
</style>

<div>
    {#each legends as legend}
        <Farm farm={legend}/>
    {/each}
</div>
