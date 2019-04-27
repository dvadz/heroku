var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.get('/', function(req, res){
    res.send("Welcome to Daniel's First Heroku Deployment");

});

app.get('/getname/:name', function(req, res){
    res.send(req.params.name);
});

// app.post('/search', function(req,res){
//     res.send(req.params.q);
// });

// ------------------------
app.listen(PORT, function(){
    console.log(`Heroku test server is running on PORT ${PORT}`);
});