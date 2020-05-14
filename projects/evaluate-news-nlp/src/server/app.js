const dotenv = require('dotenv')
dotenv.config()

const path = require('path')
const express = require('express')
const aylien = require('aylien_textapi')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

app.get('/article', function (req, res) {
    textapi.sentiment({
            "url": req.query.url,
            "mode": "document"
        }, function(error, response) {
            console.log(error)
            console.log(response)
            res.send(response)
        }
    )
})

module.exports = app