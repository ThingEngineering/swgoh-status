<script>
    import { flatten, forEach } from 'lodash'

    import { categories, flat_categories } from '../data/categories'
    import { useCategories } from '../stores/user-data'

    import FarmCategory from  './FarmCategory.svelte'
</script>

<style>
</style>

<main>
    {#if $useCategories}
        {#each categories as category}
            <FarmCategory {...category} />
        {/each}
    {:else}
        {#each flat_categories as category}
            <FarmCategory {...category} />
        {/each}
    {/if}
</main>
