export default async function fetch_json(request: string): Promise<string> {
    request = `https://corsproxy.io/?${request}`
    // request = `https://proxy.cors.sh/${request}`
    let fetchRequest = new Request(request)
    fetchRequest.headers.append('X-Requested-With',"fetch")
    fetchRequest.headers.append('Origin',"https://swgohstatus.com")
    return fetch(fetchRequest)
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