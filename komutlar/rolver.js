const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  message.delete();
  let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Vermem için herhangi bir id yazmalısın.');
    if(message.guild) {
      message.member.addRole(mesaj)
    } else return message.author.send(`bu işlemi gerçekleştiremezsin.`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'rolver',
  description: 'İstediğiniz rolu verir.',
  usage: 'rolver [almak istediğin rol id si]'
};
