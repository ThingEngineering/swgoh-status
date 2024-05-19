/**
 * Import required modules from libraries and local files.
 */
import { forEach } from 'lodash'
import { writable } from 'velte/store'

import fetch_json from '../utils/fetch-json'
import getCachedData from '../utils/get-cached-data'
import matchPlayerId from '../utils/match-player-id'

/**
 * Define writable stores for the application state.
 */
export const code = writable('')
export const error = writable(false)
export const loading = writable(true)
export const player = writable({})
export const units = writable({})

/**
 * Fetch player data from the API and update the application state.
 *
 * @returns {Promise<void>}
 */
export const fetch = async function() {
    // Extract player ID from the URL query parameters.
    const match = document.location.search.match(/^\?player=(.*?)$/)
    if (!match) {
        return
    }

    // Validate and sanitize the player ID.
    const player_id = matchPlayerId(match[1])
    if (player_id === null) {
        error.set(true)
        return
    }

    // Update the code store with the player ID.
    code.set(player_id)

    // Fetch player data from the API with caching.
    const data = await getCachedData(`player_${player_id}`, 3600000, async () => {
        return await fetch_json(`http://api.swgoh.gg/player/${player_id}/`)
    })
    if (data === null) {
        error.set(true)
        return
    }

    // Parse the fetched JSON data.
    const parsed = JSON.parse(data)

    // Transform the units data into a more convenient format.
    let sigh = {}
    forEach(parsed.units, function(unit) {
        sigh[unit.data.name] = unit.data
    })

    // Update the application state with the fetched data.
    player.set(parsed.data)
    units.set(sigh)
    loading.set(false)
}

/**
 * Export the fetch function and the writable stores.
 */
export default {
    loading,
    player,
    fetch,
}