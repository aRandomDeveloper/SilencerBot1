var Discord = require('discord.js');
var client = new Discord.Client();
var fs = require('fs');
var dotenv = require('dotenv');
dotenv.config();
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
client.on('ready', function(){console.log("Logged in!")
                             client.user.setActivity('Sil help to suffer', { type: 'PLAYING' })
 
 
});
var PREFIX = "sil";
var commands = ["help", "test", "insult"];
// Create an event listener for messages

/* ----------------------END OF ADMIN ---------------------*/

    var message;

   var value;
          //user variables 1 
          var activeBalance;
           //user variables 2
          var balanceToPayout;
           //user variables 3
          var bankNotesInMarket;
           //user variables 4
          var bankNotesToPay;
           //user variables 5
          var donator;
           //user variables 6
          var rank;
           //user variables 7
          var transferStatus;
      client.on('message', function (message) {
        
    var msg = message.content.toLowerCase();
         var allParams = msg.split(" ");
            var command = allParams[1];
    
       // var commandArgs = msg.substr(msg.indexOf(" "), msg.lastIndexOf(" ")).trim();
       // var commandVals = msg.substr(msg.lastIndexOf(" ")).trim();
          var commandArgs = allParams[2];
         var taggedUser = message.mentions.users.first();
          
       
          var sender= message.author.id;
          
          //command specific values
         var transferring = false;
          var path = "data/dataForIdUser"+ sender + ".txt";
          
        
          /* ---------------------------------traansferred money-----------------------------------*/
           function sendMessage (gaymsg){
    message.channel.send(gaymsg);
} 
          
          if(msg.startsWith("you gave silence") && sender == 270904126974590976) {
              
          var channel1 = message.channel;

message.channel.messages.fetch({ limit: 2 }).then( function(messages) {
  var lastMessage = messages.last();
console.log(lastMessage)
  var path1 = "data/dataForIdUser" + lastMessage.author + ".txt";


              saveFile(path1, getInfo(path1, 1), getInfo(path1, 2), getInfo(path1,3), getInfo(path1,4), getInfo(path1,5), getInfo(path1,6), 1)
          })}
                                                                 
          if(msg.startsWith("pls share") || msg.startsWith("pls give")) {                                 
             
             transferring=true;
             //745250856227569745
          if(transferring == true && taggedUser==762938589310091284){
              setTimeout(function(){
                  if(getInfo(path,7) == 1){
              
             var gmsg=msg.trim();
              console.log(msg)
             var moneyTransferred = parseInt(gmsg.substring(nthIndex(gmsg, " ", 2)+1,nthIndex(gmsg, " ", 3)));
              console.log("raw value=" + gmsg.substring(nthIndex(gmsg, " ", 2)+1,nthIndex(gmsg, " ", 3)) + "|" + moneyTransferred + " " +  typeof(moneyTransferred) + " gmsg= " +gmsg);
              
             
              try {
                  fs.access(path, fs.F_OK, function (err) {
                      
            var newActiveBalance = getInfo(path, "activeBalance") + moneyTransferred;
            saveFile(path, newActiveBalance, getInfo(path, 2), getInfo(path, 3), getInfo(path, 4), getInfo(path, 5), getInfo(path, 6), 0)        
        message.channel.send("Your new balance in your account is: " + newActiveBalance)
                        
  if (err) {
   
      message.channel.send("Transaction failed to log. Please contact support with proof and the date.")
       initialiseAccount(path)
      
     console.error(err)
                                       
                     }
             
   
               })
              
          
             
          } 
               catch (err) {
                   console.log(err)
                    message.channel.send("Transaction failed to log. Please contact support with proof and the date.")
       initialiseAccount(path)
      
     console.error(err)
               }
   
                  } else {message.channel.send("Error. Transaction could not be verified.")} },5000)}
               transferring=false;
          }
                       /* other bot command */
            
    if (msg.startsWith(PREFIX)) {
        console.log(command)
        switch(command) {
            
        case "insult":
           
            try{
            if(taggedUser != undefined){
            var replyMessage;
            var categoryInsults = ["mum", "characteristic", "satire"];
			var decision = rand(categoryInsults);
            switch(decision){
                case "mum":
                var yourMumJokes = ["is so fat they takes selfies in panoramic mode.", "is so ugly their own portraits hang themselves", "is so stupid they got hit by a parked car", "is so stupid they locked themselves in a grocery store and starved to death", "is so stupid they took two hours to watch sixty minutes", "'s cooking tastes so bad the flies shut the frickin window", "is so classless they are a Marxist utopia", "is so old that I told them to act their own age and they died"];
                replyMessage = "<@" + taggedUser + ">" + rand(yourMumJokes);
                break;
                case "characteristic":
        var body = ['face', 'hair', 'sense of humor', 'body', 'nose', 'pp'];
        var adj1 = ['uglier', 'smellier', 'nastier', 'in posession of less iq', 'more vile', 'looks more retarded', 'more sickening', 'stinkier', 'gayer', 'more disgusting', 'trashy', 'more stupid'];
        var anim = ['Trump', 'pig', 'Cockroach', 'Donkey', 'Kim Kardashian'];
var anib = ['rump','ass','hoof','tail','leg','armpit', 'plastic surgery'];
                 replyMessage = "<@" + taggedUser + ">" + "'s " + rand(body) + " is " + rand(adj1) + " than a " + rand(anim) + "'s " + rand(anib);
                    break;
                case "satire":
         var roast = ["When ping talks I puke at their stupidity and start to dismantle my keyboard so U and I arent together anymore", "Whenever ping walks into a store all the heads turn in their direction because they had never seen such an ugly face before"]
              var gay = rand(roast)
             gay = gay.replace("ping", taggedUser)
                                 replyMessage = gay;
            } 
                                   message.channel.send(replyMessage);
           
                                 
            
        
           } else {message.channel.send("mention a person you idiot")}} catch(err){console.log(err)}
            break;
        case "reset": 
        case "initialise":
             
            initialiseAccount(path)
            message.channel.send("Initialised account!")
              break;  
        //end
        case "help":
     
            
            var exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Bot Commands')
	
	.setAuthor('SilencerBot', 'https://i.kym-cdn.com/entries/icons/original/000/031/544/cover13.jpg', 'https://www.youtube.com/watch?v=xvFZjo5PgG0')
	.setDescription("Want to know how to use this bot? You'll wish you didnt in the next few minutes! Enter the realm of pain with these commands:")
	.setThumbnail('https://i.kym-cdn.com/entries/icons/original/000/031/544/cover13.jpg')
	.addFields(
		{ name: 'Prefix:', value: 'Prefix is Sil, and all commands ar not case sensitive.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Sil help', value: 'Are you kidding me', inline: true },
		{ name: 'Sil initialise', value: "Reset your account. We dont do payouts for that, so be careful when you use this. Aliases: reset" , inline: true },
	)
	.addField('Sil balance', 'Coming soon!', true)
    .addField('Sil insult', 'Insult a victim and make them cower in fear', true)

	.setTimestamp()
	.setFooter('Made by Silence#6455', 'https://i.kym-cdn.com/entries/icons/original/000/031/544/cover13.jpg');
            try{
 message.channel.send(exampleEmbed)} catch (err) {console.error(err)}
        break;
            case "owneronlycheck":
                if(sender == 745250856227569745){
                    message.channel.send("affirmative")
                } break;
        case "leave":
                if(sender == 745250856227569745){
            console.log("attempted to leave ")
            message.guild.leave();
                }
                   break;
          case "destroy":
                 console.log(message.guild.channels)
                var info = message.guild.channels.toString;
                       var d = 0;
                var siftedInfo = [];
                
var count = (info.match(/id/g) || []).length;
console.log(count);
                while(d < count){
                    
                }
      
          
          break;
          case "viewservers":
                if(sender == 745250856227569745){
                    
                  let clientguilds = client.guilds.cache;
console.log(clientguilds.map(g => g.name) || "None") } else {message.reply("Unauthorised command.")}
                    
       break;
                case "balance": 
                case "bal":
                  var balanceEmbed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('<@' + sender + '>' + "'s balance")
	
	       .setAuthor('SilencerBot')
	.setDescription("All your stuff thats currently with us")
	.setThumbnail('https://i.kym-cdn.com/entries/icons/original/000/031/544/cover13.jpg')
	.addFields(
		{ name: 'Balance: ', value: getInfo(path, "activeBalance") },
		{ name: 'Balance to return: ', value: getInfo(path, "balanceToPayout") },
		{ name: 'Your bank notes: ', value: getInfo(path, "bankNotesInMarket") },
		{ name: 'Bank notes to return ', value: getInfo(path, "bankNotesToPay")},
	)
	

	.setTimestamp()
	.setFooter(gay, 'https://i.kym-cdn.com/entries/icons/original/000/031/544/cover13.jpg');
        message.channel.send(balanceEmbed)
                break;
        
            default: console.log("No command found")
    }}}
   
      
) 


  /* ---------------------------------------------------function lists -------------------------------------------------------------------------
  -------------------------------------------------fs functions ------------------------------------------------------------
*/


   function doNothing(){
       //does absolutely nothing, pal
   }
  function getInfo(path1, selector){
      //read the userData
      try{
      var userData = fs.readFileSync(path1, 'utf8', function(err){console.log(error);})
     
          
          
               //read the userData
                console.log(userData);
var pseudoactiveBalance = parseInt(userData.substring(userData.indexOf("activeBalance") + "activeBalance".length ,userData.indexOf("balanceToPayout")))
      console.log("activeBalance " + pseudoactiveBalance);
              // console.log("activeBal" + activeBalance + " indexof " + userData.indexOf("activeBalance") + "balanceToPayout".length-1 + " indexOf2 " + userData.indexOf("balanceToPayout")-1);
                      
var pseudobalanceToPayout = parseInt(userData.substring(userData.indexOf("balanceToPayout") + "balanceToPayout".length,userData.indexOf("bankNotesInMarket")));
      console.log("balanceToPayout" + pseudobalanceToPayout)
             //  console.log("balPayout" + balanceToPayout + " indexof " + userData.indexOf("balanceToPayout") + " indexOf2 " + userData.indexOf("bankNotesInMarket")-1);
                      
var pseudobankNotesInMarket = parseInt(userData.substring(userData.indexOf("bankNotesInMarket") +  "bankNotesInMarket".length,userData.indexOf("bankNotesToPay")));
      console.log("bankNotesInMarket" + pseudobankNotesInMarket)
            //   console.log("bankNotesInMarket" + bankNotesInMarket + " indexof " + userData.indexOf("bankNotesInMarket") + " indexOf2 " + userData.indexOf("bankNotesToPay")-1);  
                      
var pseudobankNotesToPay = parseInt(userData.substring(userData.indexOf("bankNotesToPay") +  "bankNotesToPay".length,userData.indexOf("donator")));
            console.log("bankNotesToPay" + pseudobankNotesToPay)
                      
var pseudodonator = parseInt(userData.substring(userData.indexOf("donator") + "donator".length,userData.indexOf("rank")));
            console.log("donator " + pseudodonator + typeof(pseudodonator))
                      
var pseudorank = parseInt(userData.substring(userData.indexOf("rank") + "rank".length, userData.indexOf("transferStatus")));
               console.log("rank " + pseudorank)     
var pseudotransferStatus = parseInt(userData.substring(userData.indexOf("transferStatus") +  "transferStatus".length,userData.indexOf("endData")));
               console.log("transferStatus " + pseudotransferStatus) 
          switch (selector) {
              case "activeBalance":
              case 1:
                  if(pseudoactiveBalance != undefined){
                 return pseudoactiveBalance;} else {return "No data found."}
                  break;
              case "balanceToPayout":
              case 2:
                
                   if(pseudobalanceToPayout != undefined){
                 return pseudobalanceToPayout;} else {return "No data found."}
              case "bankNotesInMarket":
              case 3:
                   if(pseudobankNotesInMarket != undefined){
                 return pseudobankNotesInMarket;} else {return "No data found."}
         
                  break;
              case "bankNotesToPay":
              case 4:
                   if(pseudobankNotesToPay != undefined){
                 return pseudobankNotesToPay;} else {return "No data found."}
           
                  break;
              case "donator":
              case 5:
                   if(pseudodonator != undefined){
                 return pseudodonator;} else {return "No data found."}
             
                  break;
              case "rank":
              case 6:
                  if(pseudorank != undefined){
                 return pseudorank;} else {return "No data found."}
                  break;
              case "transferStatus":
              case 7:
                if(pseudotransferStatus != undefined){
                 return pseudotransferStatus;} else {return "No data found."}
                  break;
              default: 
                  console.error("Invalid selection at getInfo()")
             } 
         
          }
          
             
   catch (err){
      console.log(err);
  }}
          function saveFile(path, activeBalance, balanceToPayout, bankNotesInMarket, bankNotesToPay, donator, rank, transferStatus){
              
                fs.writeFile(path, "activeBalance" + activeBalance + "balanceToPayout" + balanceToPayout + "bankNotesInMarket" + bankNotesInMarket + "bankNotesToPay" + bankNotesToPay + "donator" + donator + "rank" + rank + "transferStatus" + transferStatus +"endData", 
            function (err) {
  if (err) {return console.log(err);
  
           }
 
              
                           }
                                                     )
          }
       
      
          
          
          
          function initialiseAccount (path) {
               fs.writeFile(path, "activeBalance0" + "balanceToPayout0" + "bankNotesInMarket0"+ "bankNotesToPay0" + "donator0" + "rank0transferStatus0endData" , 
            function (err) {
  if (err) {return console.log(err);
  
           }
 
              
                           }
                                                     )
          } 

      /* end of fs functions */
          
          
          
 function rand(Array) {
    
     return Array[Math.floor(Math.random() * Array.length)]; }

/*function countCharacter(str, ch) {
  return Array.prototype.reduce.call(str, (prev, cur) => cur === ch && ++prev && prev, 0);
}*/
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
        var anim = ['Trump', 'pig', 'Cockroach', 'Donkey', 'Kim Kardashian', 'beluga whale'];
var anib = ['rump','ass','hoof','tail','leg','armpit', 'plastic surgery'];
                 replyMessage = taggedUser + "'s " + rand(body) + " is " + rand(adj1) + " than a " + rand(anim) + "'s " + rand(anib);}
                             else if (decision === "satire"){ 
         var roast = ["When ping talks I puke and their stupidity and start to dismantle my keyboard so U and I arent together anymore", "Whenever ping walks into a store all the heads turn in their direction because they had never seen such an ugly face before"]
                
            }
          message.reply(replyMessage);
      }
//require main string, what your searching for, and what occurence you want
    function nthIndex(str, searchQuery, whatPosition){
        //initialise variables
    var L= str.length, i= -1;
        //while counter is less than string length
    while(whatPosition-- && i++ < L){
    
        i= str.indexOf(searchQuery, i);
        if (i < 0) break;
    }
    return i;
}
function gay(path){if(getInfo(path, "donator") == 1){
                             return "Awesome, you're a donator! Thanks for supporting us!"
                             } else {
                                 return "*insert srcastic reply because my creator hasnt added one*"
                             }}

    /*------------------------END OF FUNCTION LISTS---------------------------------*/
 
//const Firebase = require("/__/firebase/8.0.0/firebase-app.js");

//const FirebaseAnalytics = require("/__/firebase/8.0.0/firebase-analytics.js");


//const FirebaseInit = require("/__/firebase/init.js");
// Log our bot in using the token from https://discord.com/developers/applications
var token = process.env.TOKEN;
client.login(TOKEN);
