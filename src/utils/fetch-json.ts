export default async function fetch_json(request: string): Promise<string> {
    // request = `https://cors-anywhere.swgohstatus.com/${request}`
    request = `https://proxy.cors.sh/${request}`
    let requestFull = new Request(request)
    // requestFull.headers.append('X-Requested-With',"HelloThere")
    requestFull.headers.append('Origin',"https://swgohstatus.com")
    return fetch(requestFull)
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