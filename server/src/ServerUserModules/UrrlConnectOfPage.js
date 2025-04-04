const fs = require('fs')
function readFileAsync(filePath, res) {
    fs.readFile(`client/Pages/${filePath}`, (error, data)=> {
        if (error) {
            console.error(error)
        }else{
            res.end(data)
        }
    })
}

module.exports = { readFileAsync };