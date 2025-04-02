const server = require('http');
const {RenderFile} = require('./ServerUserModules/UrrlConnectOfPage');
const {RenderPostOfMain} = require('./ServerUserModules/RenderInfoOfPage');
const PORT = 8080;

server.createServer((req, res) => {
    const url = req.url;

    req.method === 'POST' && url === '/Main'? RenderPostOfMain(req, url) : console.log('Данных не обнаруженно');

    if (url === '/') {
        res.statusCode = 302;
        res.setHeader('location', '/Main');
        res.end();
    }else if (url === '/Main'){
        RenderFile(res, 'index.html');
    }else {
        RenderFile(res, url);
    }

}).listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

