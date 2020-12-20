 const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const dotenv = require('dotenv');
const help = function(){
     var helpEmbed = new Discord.MessageEmbed()
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
        {name: 'Sil invite', value: "Invite Silencer to your server!"}
	)
	.addField('Sil balance', 'Coming soon!', true)
    .addField('Sil insult', 'Insult a victim and make them cower in fear', true)
    
	.setTimestamp()
	.setFooter('Made by Silence#6455', 'https://i.kym-cdn.com/entries/icons/original/000/031/544/cover13.jpg');
    return helpEmbed;
}