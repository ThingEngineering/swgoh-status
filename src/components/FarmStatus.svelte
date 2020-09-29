<script>
    import categories from '../data/categories'

    import FarmCategory from  './FarmCategory.svelte'
</script>

<style>
</style>

{#each categories as category}
    <FarmCategory {...category} />
{/each}
