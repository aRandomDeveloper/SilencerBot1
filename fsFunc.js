const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const dotenv = require('dotenv');
const getInfo = function(path1, selector){
      //read the userData
      try{
      var userData = fs.readFileSync(path1, 'utf8', function(err){console.log(error);})
     
          
          
               //read the userData
                console.log(userData);
var pseudoactiveBalance = parseInt(userData.substring(userData.indexOf("activeBalance") + "activeBalance".length ,userData.indexOf("balanceToPayout")))
     // console.log("activeBalance " + pseudoactiveBalance);
             
                      
var pseudobalanceToPayout = parseInt(userData.substring(userData.indexOf("balanceToPayout") + "balanceToPayout".length,userData.indexOf("bankNotesInMarket")));
      //console.log("balanceToPayout" + pseudobalanceToPayout)
            
                      
var pseudobankNotesInMarket = parseInt(userData.substring(userData.indexOf("bankNotesInMarket") +  "bankNotesInMarket".length,userData.indexOf("bankNotesToPay")));
     // console.log("bankNotesInMarket" + pseudobankNotesInMarket)
           
var pseudobankNotesToPay = parseInt(userData.substring(userData.indexOf("bankNotesToPay") +  "bankNotesToPay".length,userData.indexOf("donator")));
            //console.log("bankNotesToPay" + pseudobankNotesToPay)
                      
var pseudodonator = parseInt(userData.substring(userData.indexOf("donator") + "donator".length,userData.indexOf("rank")));
           // console.log("donator " + pseudodonator + typeof(pseudodonator))
                      
var pseudorank = parseInt(userData.substring(userData.indexOf("rank") + "rank".length, userData.indexOf("transferStatus")));
               //console.log("rank " + pseudorank)     
var pseudotransferStatus = parseInt(userData.substring(userData.indexOf("transferStatus") +  "transferStatus".length,userData.indexOf("endData")));
               //console.log("transferStatus " + pseudotransferStatus) 
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

          const saveFile = function(path, activeBalance, balanceToPayout, bankNotesInMarket, bankNotesToPay, donator, rank, transferStatus){
              
                fs.writeFile(path, "activeBalance" + activeBalance + "balanceToPayout" + balanceToPayout + "bankNotesInMarket" + bankNotesInMarket + "bankNotesToPay" + bankNotesToPay + "donator" + donator + "rank" + rank + "transferStatus" + transferStatus +"endData", 
            function (err) {
  if (err) {return console.log(err);
  
           }
 
              
                           }
                                                     )
          }
       
      
          
          
          
          const initAcc = function(path) {
               fs.writeFile(path, "activeBalance0" + "balanceToPayout0" + "bankNotesInMarket0"+ "bankNotesToPay0" + "donator0" + "rank0transferStatus0endData" , 
            function (err) {
  if (err) {return console.log(err);
  
           }
 
              
                           }
                                                     )
          } 
exports.getInfo = getInfo;
exports.saveFile = saveFile;
exports.initAcc = initAcc;