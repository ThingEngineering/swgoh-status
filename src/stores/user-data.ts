import { writable } from 'svelte/store'

function createLocalStorage<T>(key: string, def: T) {
    const { subscribe, set, update } = writable(def)

    let initial = localStorage.getItem(key)
    if (initial !== null) {
        set(JSON.parse(initial))
    }

    return {
        subscribe,
        set: (value) => {
            localStorage.setItem(key, JSON.stringify(value))
            set(value)
        },
        //update,
    }
}

export const useCategories = createLocalStorage('use_categories', true)
