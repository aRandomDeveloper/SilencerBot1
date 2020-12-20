 const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const dotenv = require('dotenv');
const insult = function(commandArgs) {try{
    
         var taggedUser = commandArgs;
        var replyMessage;
 
            var categoryInsults = ["mum", "characteristic", "satire"];
			var decision = rand(categoryInsults);
            if (decision === "mum") {
                var yourMumJokes = ["is so fat they takes selfies in panoramic mode.", "is so ugly their own portraits hang themselves", "is so stupid they got hit by a parked car", "is so stupid they locked themselves in a grocery store and starved to death", "is so stupid they took two hours to watch sixty minutes", "'s cooking tastes so bad the flies shut the frickin window", "is so classless they are a Marxist utopia", "is so old that I told them to act their own age and they died"];
                replyMessage = "<@" + taggedUser + "> " + rand(yourMumJokes);
                
            } else if (decision === "characteristic"){
        var body = ['face', 'hair', 'sense of humor', 'body', 'nose', 'pp'];
        var adj1 = ['uglier', 'smellier', 'nastier', 'in posession of less iq', 'more vile', 'looks more retarded', 'more sickening', 'stinkier', 'gayer', 'more disgusting', 'trashy', 'more stupid'];
        var anim = ['Trump', 'pig', 'Cockroach', 'Donkey', 'Kim Kardashian', 'beluga whale'];
var anib = ['rump','ass','hoof','tail','leg','armpit', 'plastic surgery'];
                 replyMessage = "<@" + taggedUser + ">'s " + rand(body) + " is " + rand(adj1) + " than a " + rand(anim) + "'s " + rand(anib);}
                             else if (decision === "satire"){ 
         var roast = ["When ping talks I puke and their stupidity and start to dismantle my keyboard so U and I arent together anymore", "Whenever ping walks into a store all the heads turn in their direction because they had never seen such an ugly face before"]
         var b = rand(roast);
                replyMessage = b.substring(0, b.indexOf("ping")) + "<@" + taggedUser + ">" + b.substring(b.indexOf("ping"));
            }} catch (e){console.log(e)}
        return replyMessage;
      }
function rand(Array) {
    
     return Array[Math.floor(Math.random() * Array.length)]; }

/*function countCharacter(str, ch) {
  return Array.prototype.reduce.call(str, (prev, cur) => cur === ch && ++prev && prev, 0);
}*/
     
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
exports.insult = insult;