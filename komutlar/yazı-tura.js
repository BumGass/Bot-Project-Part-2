const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"**YAZI-TURA\nSONUÇ: TURA**",
	"**YAZI-TURA\nSONUÇ: YAZI**"
];

exports.run = function(client, message) {
	
	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
	
	if (cevap === "**YAZI-TURA\nSONUÇ: YAZI**") {
		
		 const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
    .setAuthor(`Mowa Bot YAZI-TURA Sistemi`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
		.setTitle(cevap)
		.setThumbnail("https://img13.androidappsapk.co/300/0/6/3/com.yazi.tura.png")
    .setTimestamp()
    .setFooter(`Yazı-Tura Atan: ${message.author.username} `, message.author.avatarURL)
		message.channel.send(embedyazı);
		
	} else if (cevap === "**YAZI-TURA\nSONUÇ: TURA**") {
		
		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
    .setAuthor(`Mowa Bot Yazı-Tura Sistemi`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
		.setTitle(cevap)
		.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/c/cd/1TL_reverse.png")
    .setTimestamp()
    .setFooter(`Yazı-Tura Atan: ${message.author.username} `, message.author.avatarURL)
		message.channel.send(embedtura);
		
	}
		

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};