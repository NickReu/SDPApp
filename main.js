const express = require('express')
const db = require("./database.js")
const vf = require("./verify.js")
const app = express()

module.exports = app;

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}var path = __dirname + '/public/'

app.use(express.static(path));

app.get('/', (req, res) => res.sendFile(path + 'home.html'))

app.get('/verify', function (req, res) {
    res.sendFile(path + "login.html")
    console.log("Here I am in app.get(verify)");
})

app.listen(port, () => console.log(`Listening on port ${port}!`))

