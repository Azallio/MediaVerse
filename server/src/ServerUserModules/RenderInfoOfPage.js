export function RenderPostOfMain(req, url) {
    let loadedData = '';
    req.on('data', (chunk) => {
        loadedData += chunk;
    })
    console.log(loadedData)
}