const PORT = 8080;
const { readFileAsync } = require('./ServerUserModules/UrrlConnectOfPage')
const express = require('express')
const app = express()

app.use(express.static('client'))
app.use(express.static('client/Styles/OrdinaryLayout/'))

app.get('/', (req, res) => {
    res.setHeader('Location', '/Main')
    res.end()
})

app.get('/Main', (req, res) => {
    readFileAsync('index.html', res)
})

app.get('/Add_movie', (req, res) => {
    readFileAsync('Add_movie.html', res)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
