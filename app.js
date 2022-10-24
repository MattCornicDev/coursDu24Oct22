const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended:false }))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/home.html")
})
app.get("/page", function(req, res){
    res.sendFile(__dirname + "/page.html")
})
app.post("/page", function(req, res) {
    res.send("Votre taille est : " + req.body.taille + " et vous mesurez : " + req.body.poids + "kg")
})

app.get("/about", function(req, res){
    res.sendFile(__dirname + "/about.html")
})

app.listen(3000, function(){
    console.log("tout fonctionne comme il faut")
})