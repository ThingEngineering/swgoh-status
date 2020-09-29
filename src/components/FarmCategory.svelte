<script>
    import Farm from './Farm.svelte'

    export let name
    export let farms = []
</script>

<style>
    section {
        margin: 0 1rem 1rem 1rem;
    }
    h2 {
        background: #2b3d4f;
        margin: 0 0 1rem 0;
        padding: 0.1rem 0 0.3rem 0;
        border-top: 1px solid #3b4d5f;
        border-bottom: 1px solid #3b4d5f;
        font-size: 1.3rem;
        text-align: center;
    }
    div {
        display: grid;
        grid-template-columns: repeat(auto-fill, 27em);
        grid-gap: 2em;
        justify-content: center;
    }
</style>

<section>
    <h2>{name}</h2>
    <div>
        {#each farms as farm}
            <Farm farm={farm} />
        {/each}
    </div>
</section>
