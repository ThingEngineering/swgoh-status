/**
 * Creates a local storage store with the given key and default value.
 * @template T The type of the value stored in the local storage.
 * @param {string} key The key used to store the value in the local storage.
 * @param {T} def The default value of the store.
 * @returns {Writable<T>} A writable store that can be subscribed to and updated.
 */
function createLocalStorage<T>(key: string, def: T): Writable<T> {
    const { subscribe, set, update } = writable(def);

    let initial = localStorage.getItem(key);
    if (initial !== null) {
        set(JSON.parse(initial));
    }

    return {
        subscribe,
        set: (value) => {
            localStorage.setItem(key, JSON.stringify(value));
            set(value);
        },
        //update,
    };
}

/**
 * A writable store that uses local storage to persist its value.
 * @typeParam T The type of the value stored in the local storage.
 * @defaultValue true The default value of the store.
 */
export const useCategories = createLocalStorage<boolean>('use_categories', true);