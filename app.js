var express = require("express");
var request = require('request');
var app = express();
app.set("view engine", "ejs");

app.get("/results", function(req, res){
    var movie = req.query.search;
    var url = "https://www.omdbapi.com/?=apikey=65df4444&s=" + movie;
    request(url, function (error, response, body) {
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
});
});
app.get("/", function(req, res){
    res.render("search");
});
app.listen(3000, function(){
    console.log("Movie App has Started At Port 3000");
});