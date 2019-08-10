const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const uyemesaj = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setAuthor(`Mowa Bot Direct Message İnvite System`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle(`Hi, Would you like to come to our Bot Support Server?`)
    .addField(`\nMerhaba, Mowa Botumuzun Destek Sunucusuna Gelmek İstemez Misin?`, `**[**[**Sunucu Sınırsız Davet Linki**](https://discord.gg/9fWwE77)**]** **[**[**Bot Davet Linki**](https://discordapp.com/oauth2/authorize?client_id=593902627960520819&scope=bot&permissions=2146958847)**]** **[**[**Bot Oy Linki**](https://discordbots.org/bot/593902627960520819)**]**`)
    .setDescription(`**[**[**Server Invite Link**](https://discord.gg/9fWwE77)**]** **[**[**Bot Invite Link**](https://discordapp.com/oauth2/authorize?client_id=593902627960520819&scope=bot&permissions=2146958847)**]** **[**[**Bot Vote Link**](https://discordbots.org/bot/593902627960520819)**]**`)
    //.setURL(``)
    .setFooter(`Bot Authors : BumGass#9253 & Mümin CivCiv#6349 `, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
  message.channel.sendEmbed(uyemesaj);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'embed',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'embed'
};
