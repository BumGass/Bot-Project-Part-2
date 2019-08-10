const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  var user = message.mentions.users.first() || message.author;
  message.delete();
      const uyemesaj = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setAuthor(`Mowa Bot Nahçek Sistemi`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle(user.username + `, Size Nah Çekildi...`)
    .setImage(`http://www.sicanzi.com/images/nah.png`)
    .setDescription(``)
    .setTimestamp()
    .setFooter(`Çeken : ${message.author.tag} `, message.author.avatarURL)
  message.channel.sendEmbed(uyemesaj);
   };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nah', 'nahcek'],
  permLevel: 0
};

exports.help = {
  name: 'nahçek',
  description: 'İstediğiniz kişiye nah çeker.',
  usage: 'nahçek <kullanıcı>'
};
