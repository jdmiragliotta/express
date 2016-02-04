var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;
var email = "a@a.com";
var password ="password";

app.use(bodyParser.urlencoded({extended: false}));


app.get("/home", function(req, res){
  res.sendFile(process.cwd() + "/home.html");
});

app.get("/login", function(req, res){
  res.sendFile(process.cwd() + "/login.html");
});

app.get("/account", function(req, res){
  res.sendFile(process.cwd() + "/account.html");
});

app.get("/help", function(req, res){
  res.sendFile(process.cwd() + "/help.html");
});

app.post("/login", function(req,res){
  if(req.body.email === email && req.body.password === password){
     res.redirect("/account");
  } else {
    res.redirect("/login");
  }

})

app.listen(PORT, function(){
  console.log("App is listening to %s", PORT);
});