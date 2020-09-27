export default async function fetch_json(request: RequestInfo): Promise<string> {
    return fetch(request)
        .then(response => {
            return response.text()
        })
}
