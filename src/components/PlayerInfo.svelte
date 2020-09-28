<script>
    import { player } from '../stores/player-data'
</script>

<style>
    h1 {
        margin: 0 0 0.25em 0;
    }
    h1 > a {
        color: #eee;
    }
    h1 > span > a {
        color: #ffff88;
        font-size: 1.2rem;
    }
</style>

<h1>
    <a href="https://swgoh.gg{$player.url}">{$player.name}</a>
    <span><a href="https://swgoh.gg/g/{$player.guild_id}/guild/">&lt;{$player.guild_name}&gt;</a></span>
</h1>
