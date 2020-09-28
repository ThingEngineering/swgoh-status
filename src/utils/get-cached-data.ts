export default async function getCachedData(key: string, max_age: Number, getDataFunc: () => Promise<string>): Promise<string> {
    const updated_key = `${key}_updated`
    const dataUpdated = localStorage.getItem(updated_key)
    if (dataUpdated !== null && (Date.now() - Number(dataUpdated)) < max_age) {
        return localStorage.getItem(key)
    }
    else {
        const data = await getDataFunc()
        if (data === null) {
            localStorage.removeItem(key)
            localStorage.removeItem(updated_key)
            return null
        }

        localStorage.setItem(key, data)
        localStorage.setItem(updated_key, String(Date.now()))
        return data
    }
}
