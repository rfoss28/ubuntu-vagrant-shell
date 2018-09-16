var express = require('express');
var app= express();

app.get("/", function(req, res){
    res.send('Hi there welcome to my assignment.');

});

app.get("/speak/:animal", function(req, res){
    res.send("this is the speak route");
});

app.listen(process.env.PORT, process.env.IP, function(){
console.log("The server is listening");
});