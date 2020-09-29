import { forEach } from 'lodash'
import { writable } from 'svelte/store'

import fetch_json from '../utils/fetch-json'
import getCachedData from '../utils/get-cached-data'
import matchPlayerId from '../utils/match-player-id'

export const code = writable('')
export const error = writable(false)
export const loading = writable(true)
export const player = writable({})
export const units = writable({})

export const fetch = async function() {
    const match = document.location.search.match(/^\?player=(.*?)$/)
    if (!match) {
        return
    }

    const player_id = matchPlayerId(match[1])
    if (player_id === null) {
        error.set(true)
        return
    }

    code.set(player_id)

    const data = await getCachedData(`player_${player_id}`, 3600000, async () => {
        return await fetch_json(`https://swgoh.gg/api/player/${player_id}/`)
    })
    if (data === null) {
        error.set(true)
        return
    }

    const parsed = JSON.parse(data)

    let sigh = {}
    forEach(parsed.units, function(unit) {
        sigh[unit.data.name] = unit.data
    })

    player.set(parsed.data)
    units.set(sigh)
    loading.set(false)
}

export default {
    loading,
    player,
    fetch,
}
