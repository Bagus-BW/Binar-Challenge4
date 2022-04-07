// Import HTTP Standar Library dari Node.js 
const fs = require('fs');
const path = require('path');

// Import local module
const renderHTML = require('./render') 

const PUBLIC_DIRECTORY = path.join(__dirname, '../public');

function route(req, res){
  switch(req.url){
    case "/":
      renderHTML('index.html', res)
      break
    case "/cars":
      renderHTML('search.html', res)
      break
    default:
      if(req.url.match("\.css$") || req.url.match("\.js$") || req.url.match("\.png$") || req.url.match("\.jpg$")){
        const publicFilePath = path.join(PUBLIC_DIRECTORY, req.url)
        fs.readFile(publicFilePath, (err, data) => {
          if(err){
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.write("Error: file not found")
          }else{
            res.write(data)
          }
          res.end()
        })
      }else{
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end("Error: file not found")
      }
      break
  }
}

module.exports = route