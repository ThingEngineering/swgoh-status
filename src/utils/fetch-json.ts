export default async function fetch_json(request: RequestInfo): Promise<any> {
    return fetch(request)
        .then(response => {
            return response.json()
        })
}
