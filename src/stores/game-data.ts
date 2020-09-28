import { keyBy } from 'lodash'
import { Writable, writable } from 'svelte/store'
import getCachedData from '../utils/get-cached-data'

import fetch_json from '../utils/fetch-json'

export const error = writable(false)
export const loading = writable(true)
export const characters = writable({})
export const ships = writable({})

export const fetch = async function() {
    await loadData('characters', characters)
    await loadData('ships', ships)

    loading.set(false)
}

async function loadData(key: string, thingStore: Writable<{}>) {
    const data = await getCachedData(key, 86400000, async () => {
        return await fetch_json(`https://swgoh.gg/api/${key}/`)
    })
    if (data === null) {
        error.set(true)
        return
    }

    thingStore.set(keyBy(JSON.parse(data), 'name'))
}

export default {
    loading,
    characters,
    ships,
    fetch,
}
