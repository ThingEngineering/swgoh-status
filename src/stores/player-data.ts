import { keyBy } from 'lodash'
import { Writable, writable } from 'svelte/store'

import fetch_json from '../utils/fetch-json'
import getCachedData from '../utils/get-cached-data'

export const loading = writable(true)
export const player = writable({})
export const units = writable({})

export const fetch = async function() {
    const match = document.location.search.match(/^\?player=(\d{9,})$/)
    if (match) {
        const player_id = match[1]
        const data = await getCachedData(`player_${player_id}`, 3600000, async () => {
            return await fetch_json(`https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/player/${player_id}/`)
        })

        const parsed = JSON.parse(data)
        console.log('parsed', parsed)
        player.set(parsed.data)
        units.set(parsed.units)
        loading.set(false)
    }
}

export default {
    loading,
    player,
    fetch,
}
