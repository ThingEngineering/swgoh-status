<script>
    import { characters, ships } from '../stores/game-data'
    import { units } from '../stores/player-data'

    export let farmUnit

    const playerUnit = $units[farmUnit.name]
    const gameUnit = $characters[farmUnit.name] ?? $ships[farmUnit.name]
    const side = {'Light Side': 'light', 'Dark Side': 'dark'}[gameUnit.alignment]
    console.log(gameUnit.name, gameUnit.alignment, side)

    const hasStars = playerUnit && (playerUnit.rarity >= farmUnit.stars)
    const hasGear = !farmUnit.gear_level || (playerUnit && (playerUnit.gear_level >= farmUnit.gear_level))
    const hasRelic = !farmUnit.gear_level || !farmUnit.relic_level || (playerUnit && (playerUnit.gear_level >= 13 && ((playerUnit.relic_tier - 2) >= farmUnit.relic_level)))

    const hasCount = (hasStars | 0) + (hasGear | 0) + (hasRelic | 0)
</script>

<style type="text/scss">
    tr:nth-child(even) {
        background: #282b2f;
    }
    tr:nth-child(odd) {
        background: #383b3f;
    }
    td {
        border-top: 1px solid #585b5f;
        border-bottom: 1px solid #585b5f;
        line-height: 1;
        padding: 0 0.25em;
        white-space: nowrap;
    }
    td.image {
        padding: 0 1px 0 0;
        width: 33px;

        img {
            box-sizing: border-box;
            margin-bottom: -1px;
        }
    }
    td.light img {
        border: 1px solid #00aaff;
    }
    td.dark img {
        border: 1px solid #ff4444;
    }
    a {
        color: #EEE;
    }
    .missing-character {
        background: rgba(255, 0, 0, 0.8) !important;
    }
    td.name {
        text-align: left;
    }
    td {
        text-align: right;
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
    .missing, .success-0 {
        background: rgba(255, 0, 0, 0.2);
    }
    .success-1 {
        background: rgba(255, 133, 27, 0.3);
    }
    .success-2 {
        background: rgba(255, 220, 0, 0.3);
    }
    .success, .success-3 {
        background: rgba(31, 255, 112, 0.25);
    }
    .spacer {
        background: #282b2f;
        line-height: 0.5rem;
    }
</style>

<tr class:missing-character="{!playerUnit}">
    {#if gameUnit}
        {#if farmUnit.stars === 0}
            <td colspan="11" class="spacer">&nbsp;</td>
        {:else}
            <td class="image {side}">
                <a href="{gameUnit.url}">
                    <img src="https://imageproxy.freddie.wtf{gameUnit.image}image.png" width="32" height="32" alt="{farmUnit.name}">
                </a>
            </td>
            {#if playerUnit}
                <td class="name {farmUnit.gear_level ? `success-${hasCount}` : (hasStars ? 'success' : 'success-2')}">
                    <a href="{gameUnit.url}">{farmUnit.name}</a>
                </td>
                <td class="left {hasStars ? 'success' : 'missing'}">{playerUnit.rarity}</td>
                <td class="slash {hasStars ? 'success' : 'missing'}">/</td>
                <td class="right {hasStars ? 'success' : 'missing'}">{farmUnit.stars}</td>
                {#if farmUnit.gear_level}
                    <td class="left {hasGear ? 'success' : 'missing'}">{playerUnit.gear_level}</td>
                    <td class="slash {hasGear ? 'success' : 'missing'}">/</td>
                    <td class="right {hasGear ? 'success' : 'missing'}">{farmUnit.gear_level}</td>
                    {#if farmUnit.relic_level}
                        <td class="left {hasRelic ? 'success' : 'missing'}">{playerUnit.gear_level >= 13 ? playerUnit.relic_tier - 2 : 0}</td>
                        <td class="slash {hasRelic ? 'success' : 'missing'}">/</td>
                        <td class="right {hasRelic ? 'success' : 'missing'}">{farmUnit.relic_level}</td>
                    {:else}
                        <td colspan="3" class="success"></td>
                    {/if}
                {:else}
                    <td colspan="6" class:success="{hasStars}"></td>
                {/if}
            {:else}
                <td colspan="10" class="name">
                    <a href="{gameUnit.url}">{farmUnit.name}</a>
                </td>
            {/if}
        {/if}
    {:else}
        <td colspan="11">ERROR: invalid character "{farmUnit.name}"</td>
    {/if}
</tr>
