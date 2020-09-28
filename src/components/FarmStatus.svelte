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
        margin: 0 1em 2em 1em;
    }
    @media (min-width: 1600px) {
        div {
            grid-template-columns: repeat(3, 27em);
        }
    }
</style>

<div>
    {#each legends as legend}
        <Farm farm={legend}/>
    {/each}
</div>
