import { keyBy } from 'lodash'
import { Writable, writable } from 'svelte/store'
import getCachedData from '../utils/get-cached-data'

import fetch_json from '../utils/fetch-json'

/**
 * @description This module contains the logic for fetching and managing character and ship data.
 */
export const error = writable(false)
/**
 * @description A writable store that tracks whether an error has occurred during data fetching.
 */
export const loading = writable(true)
/**
 * @description A writable store that tracks whether data is currently being fetched.
 */
export const characters = writable({})
/**
 * @description A writable store that contains the fetched character data.
 */
export const ships = writable({})
/**
 * @description A writable store that contains the fetched ship data.
 */
export const fetch = async function() {
    /**
     * @description Asynchronous function that fetches and updates the character and ship data.
     */
    await loadData('characters', characters)
    await loadData('ships', ships)

    loading.set(false)
}

/**
 * @description Asynchronous function that fetches and updates the data for a specific key.
 * @param {string} key - The key for the data to be fetched (either 'characters' or 'ships').
 * @param {Writable<{}>} thingStore - The writable store that will contain the fetched data.
 */
async function loadData(key: string, thingStore: Writable<{}>) {
    const data = await getCachedData(key, 86400000, async () => {
        return await fetch_json(`http://api.swgoh.gg/${key}/`)
    })
    if (data === null) {
        error.set(true)
        return
    }

    thingStore.set(keyBy(JSON.parse(data), 'name'))
}

/**
 * @description Exports the loading, characters, ships, and fetch functions.
 */
export default {
    loading,
    characters,
    ships,
    fetch,
}
