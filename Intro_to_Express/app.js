var express = require("express");
var app = express();



app.get("/", function(req, res){
   //console.log("Hi there!!"); 
   res.send("Hi there!!");
});


app.get("/bye", function(req,res){
   res.send("good bye"); 
});

app.get("/dog", function(req,res){
    console.log("some one made a request to dog");
    res.send("MEOW"); 
});

app.get("/r/:subredditName", function(req,res){
    var subreddit = req.params.subredditName;
    res.send("You are in " + subreddit + " subreddit"); 
});

app.get("/r/:subredditName/comments/:id/:title/", function(req,res){
     console.log(req.params);
    res.send("comments page"); 
});

app.get("*", function(req,res){
    res.send("star"); 
});


app.listen(process.env.PORT,process.env.IP, function(){
    console.log("started");
});