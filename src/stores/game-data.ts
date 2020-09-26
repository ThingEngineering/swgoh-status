import { keyBy } from 'lodash'
import {Writable, writable} from 'svelte/store'

import fetch_json from '../utils/fetch-json'

export const loading = writable(true)
export const characters = writable({})
export const ships = writable({})

export const fetch = async function() {
    await loadData('characters', characters)
    await loadData('ships', characters)

    loading.set(false)
}

async function loadData(thing: string, thingStore: Writable<{}>) {
    let data = {}
    let fetch = true

    const dataUpdated = localStorage.getItem(`${thing}_updated`)
    if (dataUpdated !== null && (Number(dataUpdated) - Date.now()) < 86400000) {
        fetch = false
        data = JSON.parse(localStorage.getItem(thing))
    }

    if (fetch) {
        data = await fetch_json(`https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/${thing}/`)
        localStorage.setItem(thing, JSON.stringify(data))
        localStorage.setItem(`${thing}_updated`, String(Date.now()))
    }

    thingStore.set(keyBy(data, 'name'))
}
