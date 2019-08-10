const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "olabilir",
    "daha sonra tekrar sor",
    "imkansız",
    "eh yani",
    "birazcık",
    "idare eder",
    "muhtemelen"
];

const nasılcevaplar = [
  "iyiyim",
  "iyiyim, sen nasılsın (Cevaplanamaz)",
  "iyi işte yuvarlanıp gidiyoz",
  "kötüyüm, sen ne kadar kötüsün\nhttps://youtu.be/dFRBFgtK-1U?t=75",
  "bu seni hiç...\nhttps://youtu.be/_nAYdw5qu7c?t=22",
  "daha sonra tekrar sor"
];

const küfürcevaplar = [
  "Bilmem, Sen Ne Kadar Edebilirsin? https://www.youtube.com/watch?v=U0IotdMot-A",
  "Valla Ben Edersem Mikrofon Elektrik Çarpar Ama Yinede Senin İçin Edecem... https://www.youtube.com/watch?v=kd8tFn2qb7E",
];


exports.run = function(client, message, args) {
    var soru = args.join(' ');
  const sahipler = new Discord.RichEmbed()
  .setColor(message.guild.me.displayColor)
  .setAuthor(`Mowa Bot Projesi Sahipleri`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
  .setTitle(`**Sahip 1 : ${ayarlar.sahip1tag}**`)
  .addField(`**Sahip 2 : ${ayarlar.sahip2tag}**`, `Destek Sunucumuza Gelmek İçin :\nhttps://discord.gg/9fWwE77`)
  .setFooter(`Sorgulayan : ${message.author.tag}`, message.author.avatarURL)

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
  var nasılcevap = nasılcevaplar[Math.floor(Math.random() * nasılcevaplar.length)];
  var küfürcevap = küfürcevaplar[Math.floor(Math.random() * küfürcevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**:  g_sorusor <soru>')
  if(soru.toLowerCase() === "adın ne") return message.reply(`Benim Adım = ${client.user.username}`)
  if(soru.toLowerCase() === "adın ne?") return message.reply(`Benim Adım = ${client.user.username}`)
  if(soru.toLowerCase() === "adım ne") return message.reply(`Senin Adın = ${message.author.username}`)
  if(soru.toLowerCase() === "adım ne?") return message.reply(`Senin Adın = ${message.author.username}`)
  if(soru.toLowerCase() === "sahibin kim") return message.channel.sendEmbed(sahipler)
  if(soru.toLowerCase() === "sahibin kim?") return message.channel.sendEmbed(sahipler)
  if(soru.toLowerCase() === "küfür edebilir misin?") return message.reply(küfürcevap)
  if(soru.toLowerCase() === "küfür edebilir misin") return message.reply(küfürcevap)
  if(soru.toLowerCase() === "küfür edebilirmisin?") return message.reply(küfürcevap)
  if(soru.toLowerCase() === "küfür edebilirmisin") return message.reply(küfürcevap)
  if(soru.toLowerCase() === "bana küfür edebilir misin?") return message.reply(küfürcevap)
  if(soru.toLowerCase() === "bana küfür edebilir misin") return message.reply(küfürcevap)
  if(soru.toLowerCase() === "bana küfür edebilirmisin?") return message.reply(küfürcevap)
  if(soru.toLowerCase() === "bana küfür edebilirmisin") return message.reply(küfürcevap)
  if(soru.toLowerCase() === "küfür et") return message.reply(küfürcevap)
  if(soru.toLowerCase() === "bana küfür et") return message.reply(küfürcevap)
  if(soru.toLowerCase() === "nasılsın") return message.reply(nasılcevap)
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['sorusor', 'sor', 'botasor'],
  permLevel: 0 
};

exports.help = {
  name: 'sorusor', 
  description: 'Sorularınızı Cevaplar.',
  usage: 'sorusor <soru>'
};