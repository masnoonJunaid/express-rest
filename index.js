const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 1010;

const app = express();

app.use((req,res,next) => {
	console.log(req.headers) ;
	 res.setHeader('Content-Type','text/html');
	res.end('<html><body><h1>This is an Epress Server</h1></body></html>');
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`)
})
