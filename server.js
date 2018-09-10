const http = require('http');

const handleRequest = function (request, response) {
    console.log('Received request for URL: ' + request.url);
    response.writeHead(200);
    const envs = process.env;
    console.log(envs);
    response.end('hello world');
};
const www = http.createServer(handleRequest);
www.listen(8080);