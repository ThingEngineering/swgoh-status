<script>
    import { units } from '../stores/player-data'
    import { spacer } from '../things/farm-unit';

    import FarmUnit from './FarmUnit.svelte'

    export let farm

    const hasUnit = $units[farm.name] !== undefined
</script>

<style type="text/scss">
    table {
        border: 1px solid #585b5f;
        border-collapse: collapse;
        width: 27em;
    }
    colgroup {
        border: 1px solid #585b5f;
    }
    thead td {
        position: relative;
        font-size: 1.2rem;
        text-align: center;

        > span {
            position: absolute;
            right: 0.3rem;
            color: #ffaaaa;
            text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);

            &.has {
                color: #aaffaa;
            }
        }
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
</style>

<table>
    <colgroup span="2"></colgroup>
    <colgroup span="1" class="stars"></colgroup>
    <colgroup span="1" class="gear"></colgroup>
    <colgroup span="1" class="relic"></colgroup>
    <thead>
        <tr>
            <td colspan="11" class="{farm.side}">{farm.name}<span class:has={hasUnit}>{hasUnit ? '✔' : '✖'}</span></td>
        </tr>
        <tr>
            <th colspan="2">Name</th>
            <th>Stars</th>
            <th>Gear</th>
            <th>Relic</th>
        </tr>
    </thead>
    <tbody>
        {#each farm.units as unit}
            <FarmUnit farmUnit={unit} />
        {/each}
        {#if farm.ships.length > 0}
            <FarmUnit farmUnit={spacer} />
            {#each farm.ships as ship}
                <FarmUnit farmUnit={ship} />
            {/each}
        {/if}
    </tbody>
</table>
