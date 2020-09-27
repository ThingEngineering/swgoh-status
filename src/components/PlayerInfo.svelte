<script>
    import { player } from '../stores/player-data'
</script>

<style>
    h1 {
        margin: 0 0 0.25em 0;
    }
    h1 span {
        color: #ffff88;
        font-size: 1.2rem;
    }
</style>

<h1>{$player.name} <span>&lt;{$player.guild_name}&gt;</span></h1>
