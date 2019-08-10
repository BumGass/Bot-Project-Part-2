const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require('randomstring');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  var uzunluk = args.slice(0).join(' ');

    if (!uzunluk) return message.reply(`Bir uzunluk belirt. **Doğru Kullanım**: ${ayarlar.prefix}rastgeleşifre <uzunluk>`)
              if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  if(uzunluk > 32) return message.reply('Uzunluk 32 Karakteri Geçemez!')
  else {
    message.channel.send(
            randomstring.generate({
            length: uzunluk,
              numbers: true
}))
  }
     
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rastgele-şifre', 'rastgelesifre', 'rastgele-sifre', 'şifre', 'sifre'],
  permLevel: 0
};

exports.help = {
  name: 'rastgeleşifre',
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'rastgeleşifre <uzunluk>'
};
