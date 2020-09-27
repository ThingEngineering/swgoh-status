<script>
    import { characters, ships } from '../stores/game-data'
    import { units } from '../stores/player-data'

    export let farmUnit

    const playerUnit = $units[farmUnit.name]
    const gameUnit = farmUnit.gear_level ? $characters[farmUnit.name] : $ships[farmUnit.name]
    //console.log('characters', $characters)
    //console.log('ships', $ships)
    //console.log(playerUnit, gameUnit)

    const hasStars = playerUnit && (playerUnit.rarity >= farmUnit.stars)
    const hasGear = !farmUnit.gear_level || (playerUnit && (playerUnit.gear_level >= farmUnit.gear_level))
    const hasRelic = !farmUnit.gear_level || (playerUnit && (playerUnit.gear_level >= 13 && ((playerUnit.relic_tier - 2) >= farmUnit.relic_level)))
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
    .missing-character {
        background: #ff0000 !important;
    }
    .name {
        text-align: left;
    }
    .left {
        padding-right: 0;
    }
    .slash {
        padding: 0 0.1em;
    }
    .right {
        padding-left: 0;
    }
    .missing {
        background: rgba(255, 0, 0, 0.2);
    }
    .success {
        background: rgba(0, 255, 0, 0.15);
    }
</style>

<tr class:missing-character="{!playerUnit}">
    <td class="image"><img src="https://swgoh.gg{gameUnit.image}" width="32" height="32" alt="{farmUnit.name}"></td>
    <td class="name {hasStars && hasGear && hasRelic ? 'success' : ''}">{farmUnit.name}</td>
    {#if playerUnit}
        <td class="left {hasStars ? 'success' : 'missing'}">{playerUnit.rarity}</td>
        <td class="slash {hasStars ? 'success' : 'missing'}">/</td>
        <td class="right {hasStars ? 'success' : 'missing'}">{farmUnit.stars}</td>
        {#if farmUnit.gear_level}
            <td class="left {hasGear ? 'success' : 'missing'}">{playerUnit.gear_level}</td>
            <td class="slash {hasGear ? 'success' : 'missing'}">/</td>
            <td class="right {hasGear ? 'success' : 'missing'}">{farmUnit.gear_level}</td>
            <td class="left {hasRelic ? 'success' : 'missing'}">{playerUnit.gear_level >= 13 ? playerUnit.relic_tier - 2 : 0}</td>
            <td class="slash {hasRelic ? 'success' : 'missing'}">/</td>
            <td class="right {hasRelic ? 'success' : 'missing'}">{farmUnit.relic_level}</td>
        {:else}
            <td colspan="6" class:success="{hasStars && hasGear && hasRelic}"></td>
        {/if}
    {:else}
        <td colspan="9"></td>
    {/if}
</tr>
