<script>
    import { useCategories } from '../stores/user-data'

    import Farm from './Farm.svelte'

    export let name
    export let farms = []
</script>

<style>
    section {
        display: grid;
        grid-template-columns: repeat(auto-fill, 27em);
        grid-gap: 2em;
        justify-content: center;
        margin: 0 1rem 1rem 1rem;
    }
    h2 {
        background: #2b3d4f;
        border-top: 1px solid #3b4d5f;
        border-bottom: 1px solid #3b4d5f;
        grid-column: 1/-1;
        margin: 0 0 -1rem 0;
        padding: 0.1rem 0 0.3rem 0;
        font-size: 1.3rem;
        text-align: center;
    }
</style>

<section>
    {#if $useCategories}
        <h2>{name}</h2>
    {/if}
    {#each farms as farm}
        <Farm farm={farm} />
    {/each}
</section>
