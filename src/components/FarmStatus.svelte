<script>
    import farms from '../data/farms'

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
    {#each farms as farm}
        <Farm farm={farm}/>
    {/each}
</div>
