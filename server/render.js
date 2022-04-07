// Import HTTP Standar Library dari Node.js 
const fs = require('fs');
const path = require('path');

const PUBLIC_DIRECTORY = path.join(__dirname, '../public');

function renderHTML(htmlPath, res){
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlPath)
    fs.readFile(htmlFilePath, function(err, data){
        if(err){
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.write('Error: file not found')
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data);
        }
        res.end()
    })
}

module.exports = renderHTML