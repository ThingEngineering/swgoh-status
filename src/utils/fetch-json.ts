export default async function fetch_json(request: string): Promise<string> {
    request = `https://cors-anywhere.freddie.wtf/${request}`
    return fetch(request)
        .then(response => {
            if (response.ok) {
                return response.text() ?? null
            }
            else {
                console.log(`fetch failed: ${response.status} ${response.statusText}`)
                return null
            }
        })
        .catch(err => {
            console.error(`fetch error: ${err}`)
            return null
        })
}
