const express = require('express');
const db = require('./database.js');
var exp_val = require('express-validator');

//const vf = require("./verify.js")
const app = express();
app.use(expressValidator());


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

app.post('/verify', function (req, res) {
    console.log("Hello world");
    //req.assert("user","user required").notEmpty();
    //req.assert("pass","pass required").notEmpty();

    console.log("test");
    
    var errors = req.validationErrors();
    
    if (!errors) {
        var id = {
            user: req.santitize("user").escape().trim(),
            pass: req.santitize("pass").escape().trim()
        };
        db.func('checkuser', [id.user, id.pass])
            .then( data => {
                var temp = data[0];
                var final = temp.checkuser;
                console.log("temp =", temp);
                console.log("final =", final);
                if (final == true){
                    res.redirect("home.html");
                }
                else {
                    res.redirect("home.html");
                }
        })
    }
});

//app.use("/verify", vf)

app.listen(port, () => console.log(`Listening on port ${port}!`))

module.exports = app;
