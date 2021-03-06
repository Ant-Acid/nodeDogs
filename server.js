const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    const readWrite = (file, contentType) => {
        fs.readFile(file, function (err, data) {
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data);
            res.end();
        });
    }
    switch (page) {
        case '/':
            readWrite('index.html', 'text/html')
            break;
        case '/css/style.css':
            fs.readFile('css/style.css', function (err, data) {
                res.write(data);
                res.end();
            });
            break;
        case '/js/main.js':
            readWrite('js/main.js', 'text/javascript')
            break;
    }
});


server.listen(8000);
