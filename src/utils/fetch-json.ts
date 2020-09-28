export default async function fetch_json(request: string): Promise<string> {
    //request = `https://cors-anywhere.herokuapp.com/${request}`
    request = `https://cors-anywhere.freddie.wtf/${request}`
    return fetch(request)
        .then(response => {
            return response.text()
        })
}
