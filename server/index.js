// Import HTTP Standar Library dari Node.js 
const http = require('http');

// Import local module
const route = require('./route')

const { PORT = 8000 } = process.env; // Set port
 
// Request handler
function onRequest(req, res) {
  route(req, res)
}

// create server
const server = http.createServer(onRequest);

// run server
server.listen(PORT, 'localhost', () => {
  console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
})