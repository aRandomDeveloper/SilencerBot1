const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const dotenv = require('dotenv');
const fPath = "./"

const insult = require(fPath + "insult.js");
const fileFunc = require(fPath + "fsFunc.js");




dotenv.config();
//--------------------------------ONE TIME TOGGLE FOR BETA------------------------------------
var betaTesting = true;
//--------------------------------------------------------------------------------------------
var PREFIX;
var token;
if(betaTesting === true){
     PREFIX = "sil2";
    token = process.env.BETA_TOKEN;
} else {
   PREFIX = "sil";
    token = process.env.TOKEN;
}


client.on('ready', function(){console.log("Logged in!")
                             client.user.setActivity(PREFIX + ' help to suffer', { type: 'PLAYING' })
 
 
});








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
          exports.taggedUser = taggedUser;
          exports.sender = sender;
          //command specific values
         var transferring = false;
          var path = "data/dataForIdUser"+ sender + ".txt";
          
        
          /* ---------------------------------traansferred money-----------------------------------*/
          if(msg.startsWith("you gave silence") && sender == 270904126974590976) {
              
          var channel1 = message.channel;

message.channel.messages.fetch({ limit: 2 }).then( function(messages) {
  var lastMessage = messages.last();
console.log(lastMessage)
  var path1 = "data/dataForIdUser" + lastMessage.author + ".txt";


              fileFunc.saveFile(path1, fileFunc.getInfo(path1, 1), fileFunc.getInfo(path1, 2), fileFunc.getInfo(path1,3), fileFunc.getInfo(path1,4), fileFunc.getInfo(path1,5), fileFunc.getInfo(path1,6), 1)
          })}
                                                                 
          if(msg.startsWith("pls share") || msg.startsWith("pls give")) {                                 
             
             transferring=true;
             //745250856227569745
          if(transferring == true && taggedUser==762938589310091284){
              setTimeout(function(){
                  if(fileFunc.getInfo(path,7) == 1){
              
             var gmsg=msg.trim();
              console.log(msg)
             var moneyTransferred = parseInt(gmsg.substring(nthIndex(gmsg, " ", 2)+1,nthIndex(gmsg, " ", 3)));
              console.log("raw value=" + gmsg.substring(nthIndex(gmsg, " ", 2)+1,nthIndex(gmsg, " ", 3)) + "|" + moneyTransferred + " " +  typeof(moneyTransferred) + " gmsg= " +gmsg);
              
             
              try {
                  fs.access(path, fs.F_OK, function (err) {
                      
            var newActiveBalance = fileFunc.getInfo(path, "activeBalance") + moneyTransferred;
            fileFunc.saveFile(path, newActiveBalance, fileFunc.getInfo(path, 2), fileFunc.getInfo(path, 3), fileFunc.getInfo(path, 4), fileFunc.getInfo(path, 5), fileFunc.getInfo(path, 6), 0)        
        message.channel.send("Your new balance in your account is: " + newActiveBalance)
                        
  if (err) {
   
      message.channel.send("Transaction failed to log. Please contact support with proof and the date.")
       fileFunc.initAcc(path)
      
     console.error(err)
                                       
                     }
             
   
               })
              
          
             
          } 
               catch (err) {
                   console.log(err)
                    message.channel.send("Transaction failed to log. Please contact support with proof and the date.")
       fileFunc.initAcc(path)
      
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

           message.channel.send(insult.insult(taggedUser))
            break;
        case "reset": 
        case "initialise":
             
            fileFunc.initAcc(path)
            message.channel.send("Initialised account!")
              break;  
        //end
        case "help":
     
            
           
        break;
            case "owneronlycheck":
                if(sender == 745250856227569745 || 784315445926428682){
                    message.channel.send("affirmative")
                } break;
        case "leave":
                if(sender == 745250856227569745 || 784315445926428682){
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
                if(sender == 745250856227569745 || 784315445926428682){
                    
                  let clientguilds = client.guilds.cache;
message.channel.send(clientguilds.map(g => g.name) || "None") } else {message.reply("Unauthorised command.")}
                    
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
		{ name: 'Balance: ', value: fileFunc.getInfo(path, "activeBalance") },
		{ name: 'Balance to return: ', value: fileFunc.getInfo(path, "balanceToPayout") },
		{ name: 'Your bank notes: ', value: fileFunc.getInfo(path, "bankNotesInMarket") },
		{ name: 'Bank notes to return ', value: fileFunc.getInfo(path, "bankNotesToPay")},
	)
	

	.setTimestamp()
	.setFooter(gay, 'https://i.kym-cdn.com/entries/icons/original/000/031/544/cover13.jpg');
        message.channel.send(balanceEmbed)
                break;
            case "invite":
                 var inviteEmbed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle("SilencerBot Invite")
	
	.setDescription("Want to invite Silencer to your server?")
	
	.addFields(
		{ name: 'Silencer: ', value: "[Invite Link](https://discord.com/api/oauth2/authorize?client_id=772453424712515584&permissions=8&scope=bot)" },
		{ name: 'Silencer Beta: ', value:  "[Invite Link](https://discord.com/api/oauth2/authorize?client_id=788615368109326398&permissions=8&scope=bot)"},
		
	)
        message.channel.send(inviteEmbed)
            default: 
    }}}
   
      
) 


  /* ---------------------------------------------------function lists -------------------------------------------------------------------------
  -------------------------------------------------fs functions ------------------------------------------------------------
*/


   function doNothing(){
       //does absolutely nothing, pal
   }
  

      /* end of fs functions */
          
          
          
 
function gay(path){if(fileFunc.getInfo(path, "donator") == 1){
                             return "Awesome, you're a donator! Thanks for supporting us!"
                             } else {
                                 return "*insert sarcastic reply because my creator hasnt added one*"
                             }}

    /*------------------------END OF FUNCTION LISTS---------------------------------*/
 
//const Firebase = require("/__/firebase/8.0.0/firebase-app.js");

//const FirebaseAnalytics = require("/__/firebase/8.0.0/firebase-analytics.js");


//const FirebaseInit = require("/__/firebase/init.js");
// Log our bot in using the token from https://discord.com/developers/applications

client.login(token);
