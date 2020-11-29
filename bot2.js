/*const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');


client.on('ready', function(){console.log("Logged in!")
 
});
var PREFIX = "sil";
var commands = ["help", "test", "insult"];
// Create an event listener for messages

/* ----------------------END OF ADMIN ---------------------*/

  /*  var message;

  
      client.on('message', function (message) {
        var channel = message.channel.id;
    var msg = message.content.toLowerCase();
            var command = msg.substring(PREFIX.length + 1);
        var commandArgs = msg.substr(msg.indexOf(" "), msg.lastIndexOf(" ")).trim();
        var commandVals = msg.substr(msg.lastIndexOf(" ")).trim();
         var taggedUser = message.mentions.users.first();
      var channel = message.channel.id;
          var sender= message.author.id;
          
         var numberOfPokemon;
          // delete after usage
          message.channel.send("p!start")
        
         
          /* ---------------------------------traansferred money-----------------------------------*/
          
          
          
          /*
         

             
          if(msg.startsWith("p!trade") && taggedUser==772453424712515584){
             
           
        message.reply("Please only trade 1 pokemon at a time. No refunds will be given. Type p!confirm and mention me in the same message after you are done.")
              
              var path = "dataForIdUserPokemonRaiser"+ sender;
              console.log(path)
              try {
           var userData = fs.readFile(path, function(data){
               //read the userData
               var userData = toString(data);
                numberOfPokemon = userData.substring(userData.indexOf("numberOfPokemon") + 15);
               console.log(numberOfPokemon);
               
              
            
             
               
               fs.writeFile(path + '.txt', "numberOfPokemon" + numberOfPokemon, 
            function (err) {
  if (err) {return console.log(err);
            message.reply("Error writing file.")
            
  
           }
 
              
                           }
                                                     )
                                       }
                    )
               }
               
              catch(err) {
  console.error(err)
}
          }
             
          
                       /* other bot command */
          /*    
    if (msg.startsWith(PREFIX)) {
        if(command=="insult"){
            insult();
           
           }
      
    }
   

   
  
       
        

      } )


  /* ---------------------------------------------------function lists -------------------------------------------------------------------------
  
*//*
 function rand(Array) {
    
     return Array[Math.floor(Math.random() * Array.length)]; }


      function insult(commandArgs, message) {
    
         var taggedUser = commandArgs;
        var replyMessage;
 
            var categoryInsults = ["mum", "characteristic", "satire"];
			var decision = rand(categoryInsults);
            if (decision === "mum") {
                var yourMumJokes = ["is so fat they takes selfies in panoramic mode.", "is so ugly their own portraits hang themselves", "is so stupid they got hit by a parked car", "is so stupid they locked themselves in a grocery store and starved to death", "is so stupid they took two hours to watch sixty minutes", "'s cooking tastes so bad the flies shut the frickin window", "is so classless they are a Marxist utopia", "is so old that I told them to act their own age and they died"];
                replyMessage = taggedUser + " " + rand(yourMumJokes);
                
            } else if (decision === "characteristic"){
        var body = ['face', 'hair', 'sense of humor', 'body', 'nose', 'pp'];
        var adj1 = ['uglier', 'smellier', 'nastier', 'in posession of less iq', 'more vile', 'looks more retarded', 'more sickening', 'stinkier', 'gayer', 'more disgusting', 'trashy', 'more stupid'];
        var anim = ['Trump', 'pig', 'Cockroach', 'Donkey', 'Kim Kardashian', '744103812763090995'];
var anib = ['rump','ass','hoof','anus','tail','leg','armpit', 'plastic surgery'];
                 replyMessage = taggedUser + "'s " + rand(body) + " is " + rand(adj1) + " than a " + rand(anim) + "'s " + rand(anib);}
                             else if (decision === "satire"){ 
         var roast = ["When ping talks I puke and their stupidity and start to dismantle my keyboard so U and I arent together anymore", "Whenever ping walks into a store all the heads turn in their direction because they had never seen such an ugly face before"]
                
            }
          message.reply(replyMessage);
      }*/
                
               
    /*------------------------END OF FUNCTION LISTS---------------------------------*/
 
//const Firebase = require("/__/firebase/8.0.0/firebase-app.js");

//const FirebaseAnalytics = require("/__/firebase/8.0.0/firebase-analytics.js");


//const FirebaseInit = require("/__/firebase/init.js");
// Log our bot in using the token from https://discord.com/developers/applications
// client.login('NzcyNDUzNDI0NzEyNTE1NTg0.X565Tw.x1chLl4pc1nfpvqpdWQmYkaFJ_8');


































































const http = require('http');

// Read the host address and the port from the environment
const hostname = process.env.HOST;
const port = process.env.PORT;

// Return JSON regardless of HTTP method or route our web app is reached by
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(`{"message": "Hello World"}`);
});

// Start a TCP server listening for connections on the given port and host
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});






