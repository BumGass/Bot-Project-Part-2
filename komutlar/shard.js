const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  //const S1ping = `${Math.floor(Math.round(client.ping) + Math.random)}`
  const S2ping = `${Math.round(client.ping)}ms`;
    const uyemesaj = new Discord.RichEmbed()
    .setColor(message.guild.me.displayColor)
    .setAuthor(`Mowa Bot Shard Bilgileri`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .addField(`Shard 1  <:online:608291503122677835> Ping : ${client.ping}ms\nShard 2 <:online:608291503122677835> Sunucu Sayısı : ${client.guilds.size}\nShard 3 <:online:608291503122677835> Kullanıcı Sayısı : ${client.guilds.reduce((a, b) => a + b.memberCount, 0)}`, `Shard Sayısı : 3 | Sunucu Sayısı : ${client.guilds.size} | Kullanıcı Sayısı : ${client.guilds.reduce((a, b) => a + b.memberCount, 0)}`)
    //.addField(`Shard 2 <:online:608291503122677835> `, `Ping : ${S2ping}\nSunucu Sayısı : ${Math.floor(client.guilds.size/2)}\nKullanıcı Sayısı : ${Math.floor(client.guilds.reduce((a, b) => a + b.memberCount, 0) / 2)}`, true)
    .setFooter(`Sorgulayan : ${message.author.tag} `, message.author.avatarURL)
  message.channel.sendEmbed(uyemesaj);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'shard',
  description: 'Botun Shard Bilgilerini Verir...',
  usage: 'shard'
};
