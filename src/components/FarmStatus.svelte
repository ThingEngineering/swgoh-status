<script>
    import legends from '../data/galactic-legends'

    import Farm from './Farm.svelte'
</script>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
    }
</style>

<div>
    {#each legends as legend}
        <Farm farm={legend}/>
    {/each}
</div>
