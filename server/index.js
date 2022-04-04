/**
 * Impor HTTP Standar Library dari Node.js
 * */
const http = require('http');
const { PORT = 3000 } = process.env; // Set port

const fs = require('fs');
const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, '../public');

//  handle RenderHTML
function renderHTML(htmlFileName){
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName)
  return fs.readFileSync(htmlFilePath, 'utf-8')
}

// function renderCSS(cssFileName){
//   const cssFilePath = path.join(PUBLIC_DIRECTORY, `css/${cssFileName}`)
//   return fs.readFileSync(cssFilePath, 'utf-8')
// }
 
// Request handler
function onRequest(req, res) {
  switch(req.url){
    case "/":
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(renderHTML('index.html'))
      return;
    case "/search":
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(renderHTML('search.html'))
      return;
    default:
      res.writeHead(404)
      res.end("File Not Found")
      return;
  }
}
 
const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, 'localhost', () => {
  console.log("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", PORT);
})