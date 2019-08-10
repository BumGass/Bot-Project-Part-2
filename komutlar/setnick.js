const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('İsmimi Değiştirmem İçin Herhangi Bir Şey Yazmalısın.');
  message.guild.me.setNickname(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nick', 'nickdeğiştir'],
  permLevel: 3
};

exports.help = {
  name: 'setnick',
  description: 'Botun Sunucuda İsmini Değiştirir.',
  usage: 'setnick [değiştirmek istediğiniz isim]'
};