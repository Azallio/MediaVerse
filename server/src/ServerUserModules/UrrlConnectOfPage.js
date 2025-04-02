import fs from 'fs';
import path from 'path';

const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".json": "application/json",
    ".mp3": "audio/mpeg",
    ".mp4": "video/mp4",
    ".txt": "text/plain",
    ".pdf": "application/pdf",
    ".doc": "application/msword",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".xls": "application/vnd.ms-excel",
    ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "woff": "application/font-woff",
    "woff2": "application/font-woff2",
    "ttf": "application/font-ttf",
    "eot": "application/vnd.ms-fontobject",
    "otf": "application/font-otf",
    "swf": "application/x-shockwave-flash",
    "wasm": "application/wasm"
}

function renderOfCorrectFile(res, filePath, extName, DirectoryName = '') {
    res.setHeader("Content-Type", mimeTypes[extName], 'utf-8');
    fs.readFile(path.join(`client/${DirectoryName}/`, filePath), function (err, data) {
        if (err) {
            res.setHeader("Content-Type", 'text/html');
            res.end(`<h1>Error 404, Page not found!</h1>`);
        } else {
            res.write(data);
            console.log('data is loaded');
            res.end();
        }
    })
}

export function RenderFile(res, filePath) {
    console.log(filePath);
    const extName = path.extname(filePath)
    if (extName === ".html") {
        renderOfCorrectFile(res, filePath, extName, 'Pages');
    } else if (extName === ".css" || extName === ".js") {
        renderOfCorrectFile(res, filePath, extName);
    } else if (extName === ".ico") {
        renderOfCorrectFile(res, filePath, extName, 'MediaContent/');
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", 'text/html', 'utf-8');
        res.end(`
                <h1>Error 404, Page not found!</h1>
                <h2>Page not add or page not loaded is correctly</h2>
                `);
    }
}
