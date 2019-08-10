const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const slots = ['🍒', '🍋', '🍇', '🍊', ':seven:'];

exports.run = function(client, message) {

	var slot1 = slots[Math.floor(Math.random() * slots.length)];
	var slot2 = slots[Math.floor(Math.random() * slots.length)];
	var slot3 = slots[Math.floor(Math.random() * slots.length)];
	
	if (slot1 === slot2 && slot1 === slot3) {
		const slots = new Discord.RichEmbed()
    .setAuthor(`Mowa Bot Slots Oyunu`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle(`${slot1} : ${slot2} : ${slot3}`)
    .setDescription(`Tebrikler, Kazandınız!`)
    .setThumbnail(`http://www.freeslotmachines.me.uk/wp-content/uploads/slot.png`)
    .setTimestamp()
    .setFooter(`Oynayan: ${message.author.tag} `, message.author.avatarURL)
    message.channel.sendEmbed(slots)
	} else {
		const slots = new Discord.RichEmbed()
    .setAuthor(`Mowa Bot Slots Oyunu`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle(`${slot1} : ${slot2} : ${slot3}`)
    .setDescription(`Eyvah, Kaybettin!`)
    .setThumbnail(`http://www.freeslotmachines.me.uk/wp-content/uploads/slot.png`)
    .setTimestamp()
    .setFooter(`Oynayan: ${message.author.tag} `, message.author.avatarURL)
    message.channel.sendEmbed(slots)
	}

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slots', 
  description: 'Slots Oyunu Oynatır.',
  usage: 'slots'
};