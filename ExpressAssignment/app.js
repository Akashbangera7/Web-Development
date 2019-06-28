var express = require("express");
var app = express();



app.get("/", function(req,res){
   res.send("Hi there, welcome to my assignment!"); 
});



app.get("/speak/:animal", function(req,res){
    var sounds = {
        pig: "Oink",
        cow:"Moo",
        dog: "Woof",
        cat:"Meow",
        fish:"sssss"
    }
   var animalName = req.params.animal.toLowerCase();
   var sound = sounds[animalName];
   res.send("The " +animalName+ " says '" +sound +"'");
  });



app.get("/repeat/:command/:id", function(req,res){
  var commandName = req.params.command;
  var id = Number(req.params.id);
  var result = "";
  for(var i = 0; i < id; i++)
  {
      result += commandName + " ";
  }
  
  res.send(result);

});



app.get("*", function(req,res){
   res.send("Sorry, page not found...what are you doing with your life?"); 
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("started");
})