    
const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Hey Sen Napıyorsun', 'Ben Sunucu Botuyum Lütfen Beni Sunucunda Dene.')
    return message.author.sendEmbed(ozelmesajuyari); }

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}"`);

      const mesajat = new Discord.RichEmbed()
     .setColor(0x7289da)
    .setAuthor(`Mowa Bot Direct Message İnvite System`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle(`Hi, Would you like to come to our Bot Support Server?`)
    .addField(`\nMerhaba, Mowa Botumuzun Destek Sunucusuna Gelmek İstemez Misin?`, `**[**[**Sunucu Sınırsız Davet Linki**](https://discord.gg/9fWwE77)**]** **[**[**Bot Davet Linki**](https://discordapp.com/oauth2/authorize?client_id=593902627960520819&scope=bot&permissions=2146958847)**]** **[**[**Bot Oy Linki**](https://discordbots.org/bot/593902627960520819)**]**`)
    .setDescription(`**[**[**Server Invite Link**](https://discord.gg/9fWwE77)**]** **[**[**Bot Invite Link**](https://discordapp.com/oauth2/authorize?client_id=593902627960520819&scope=bot&permissions=2146958847)**]** **[**[**Bot Vote Link**](https://discordbots.org/bot/593902627960520819)**]**`)
    //.setURL(``)
    .setFooter(`Bot Authors : BumGass#9253 & Mümin CivCiv#6349 `, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)



      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj basariyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gonderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 4
};

exports.help = {
  name: 'herkeseduyurgizlikomutudurbu',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'herkezeduyur [duyurmak istediğiniz şey]'
};