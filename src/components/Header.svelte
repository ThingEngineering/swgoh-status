<script>
    import { code, player } from '../stores/player-data'
    import { useCategories } from '../stores/user-data'
    import matchPlayerId from '../utils/match-player-id'

    let valid = false
    function validate(event) {
        valid = matchPlayerId(event.target.value) !== null
    }
</script>

<style>
    header {
        padding: 0.5rem;
    }
    div {
        text-align: center;
    }
    div > :not(:first-child) {
        margin-left: 1rem;
    }
    h1 {
        margin: 0;
        text-align: center;
    }
    h1 > a {
        color: #eee;
    }
    h1 > span > a {
        color: #ffff88;
        font-size: 1.2rem;
    }
    form {
        display: inline-block;
    }
    input, button {
        font-family: inherit;
        font-size: inherit;
        padding: 0.2rem;
        margin: 0;
        box-sizing: border-box;
        border: 1px solid #888;
        border-radius: 4px;
    }
    label {
        white-space: nowrap;
    }
    button {
        background: #004488;
        color: #eee;
    }
    button:disabled {
        color: #888;
    }
</style>

<header>
    <div>
        <form>
            <input type="text" name="player" aria-label="Ally code" placeholder="Ally code..." on:input={validate}>
            <button type="submit" disabled={!valid}>Go!</button>
        </form>
        <label>
            <input type="checkbox" bind:checked={$useCategories}>
            Use categories?
        </label>
    </div>
    {#if $player.name}
        <h1>
            <a href="https://swgoh.gg{$player.url}">{$player.name}</a>
            <span><a href="https://swgoh.gg/g/{$player.guild_id}/guild/">&lt;{$player.guild_name}&gt;</a></span>
        </h1>
    {/if}
</header>
