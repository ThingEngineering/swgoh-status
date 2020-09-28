<script>
    import FarmUnit from './FarmUnit.svelte'

    export let farm
</script>

<style>
    table {
        border: 1px solid #585b5f;
        border-collapse: collapse;
        width: 27em;
    }
    thead td {
        font-size: 1.2rem;
    }
    th {
        border: 1px solid #585b5f;
        padding: 0.25em;
    }
    .dark {
        background: rgba(255, 65, 54, 0.5);
    }
    .light {
        background: rgba(0, 116, 217, 0.5);
    }
    colgroup {
        border: 1px solid #585b5f;
    }
</style>

<table class="striped">
    <colgroup span="2"></colgroup>
    <colgroup span="3" class="stars"></colgroup>
    <colgroup span="3" class="gear"></colgroup>
    <colgroup span="3" class="relic"></colgroup>
    <thead>
        <tr>
            <td colspan="11" class="{farm.side}">{farm.name}</td>
        </tr>
        <tr>
            <th colspan="2">Name</th>
            <th colspan="3">Stars</th>
            <th colspan="3">Gear</th>
            <th colspan="3">Relic</th>
        </tr>
    </thead>
    <tbody>
        {#each farm.units as unit}
            <FarmUnit farmUnit={unit} />
        {/each}
        {#each farm.ships as ship}
            <FarmUnit farmUnit={ship} />
        {/each}
    </tbody>
</table>
