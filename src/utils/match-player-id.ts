export default function matchPlayerId(player_id: string): string {
    player_id = player_id.replace(/-/g, '')
    const result = player_id.match(/^(\d{9,})$/)
    return result ? result[1] : null
}
