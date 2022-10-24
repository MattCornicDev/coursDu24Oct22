const express = require('express')
const app = express();
const port = 3000;

app.get("/", function(req, res){
    res.send("home.html")
})

app.listen(3000, function(){
    console.log("tout fonctionne comme il faut")
})