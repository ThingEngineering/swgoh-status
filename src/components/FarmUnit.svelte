<script>
    import { characters, ships } from '../stores/game-data'
    import { units } from '../stores/player-data'

    export let farmUnit

    const playerUnit = $units[farmUnit.name]
    const gameUnit = farmUnit.gear_level ? $characters[farmUnit.name] : $ships[farmUnit.name]
    console.log('characters', $characters)
    console.log('ships', $ships)
    console.log(playerUnit, gameUnit)
</script>

<style>
    td {
        border-top: 1px solid #585b5f;
        border-bottom: 1px solid #585b5f;
        line-height: 1;
        padding: 0 0.25em;
        white-space: nowrap;
    }
    .image {
        padding: 0;
    }
    .image img {
        margin-bottom: -1px;
    }
    .missing {
        background: #ff0000 !important;
    }
    .name {
        text-align: left;
    }
</style>

<tr class:missing="{!playerUnit}">
    <td class="image"><img src="https://swgoh.gg{gameUnit.image}" width="32" height="32"></td>
    <td class="name">{farmUnit.name}</td>
    {#if playerUnit}
        <td>{playerUnit?.rarity} /</td>
        <td>{farmUnit.stars}</td>
        {#if farmUnit.gear_level}
            <td>{playerUnit.gear_level} /</td>
            <td>{farmUnit.gear_level}</td>
            <td>{playerUnit.relic_tier} /</td>
            <td>{farmUnit.relic_level}</td>
        {:else}
            <td colspan="4"></td>
        {/if}
    {:else}
        <td colspan="6"></td>
    {/if}
</tr>
