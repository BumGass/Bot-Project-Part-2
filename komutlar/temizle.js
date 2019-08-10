const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let adet = args.slice(0).join(' ');
  if(adet > 100) return message.reply('100 Den Fazla Mesajı Silmeme Discord API İzin Vermiyor!')
  else {
  message.channel.bulkDelete(adet);
    const temizledim = new Discord.RichEmbed()
    .setColor(0x00EDFF)
    .setAuthor(`Mowa Bot` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle('**' + adet + ' Adet Mesaj Sildim!**')
    .setFooter(`Sildiren : ${message.author.tag}`, message.author.avatarURL)
    const temizledim5 = new Discord.RichEmbed()
    .setColor(0x00EDFF)
    .setAuthor(`Mowa Bot` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle('**' + adet + ' Adet Mesaj Sildim!**')
    .addField(`**Bu Mesaj 5 Saniye Sonra Silinecektir**`)
    .setFooter(`Sildiren : ${message.author.tag}`, message.author.avatarURL)
    const temizledim4 = new Discord.RichEmbed()
    .setColor(0x00EDFF)
    .setAuthor(`Mowa Bot` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle('**' + adet + ' Adet Mesaj Sildim!**')
    .addField(`**Bu Mesaj 4 Saniye Sonra Silinecektir**`)
    .setFooter(`Sildiren : ${message.author.tag}`, message.author.avatarURL)
    const temizledim3 = new Discord.RichEmbed()
    .setColor(0x00EDFF)
    .setAuthor(`Mowa Bot` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle('**' + adet + ' Adet Mesaj Sildim!**')
    .addField(`**Bu Mesaj 3 Saniye Sonra Silinecektir**`)
    .setFooter(`Sildiren : ${message.author.tag}`, message.author.avatarURL)
    const temizledim2 = new Discord.RichEmbed()
    .setColor(0x00EDFF)
    .setAuthor(`Mowa Bot` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle('**' + adet + ' Adet Mesaj Sildim!**')
    .addField(`**Bu Mesaj 2 Saniye Sonra Silinecektir**`)
    .setFooter(`Sildiren : ${message.author.tag}`, message.author.avatarURL)
    const temizledim1 = new Discord.RichEmbed()
    .setColor(0x00EDFF)
    .setAuthor(`Mowa Bot` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle('**' + adet + ' Adet Mesaj Sildim!**')
    .addField(`**Bu Mesaj 1 Saniye Sonra Silinecektir**`)
    .setFooter(`Sildiren : ${message.author.tag}`, message.author.avatarURL)
  message.channel.sendEmbed(temizledim).then(msg => {
	msg.delete(5000)
    msg.edit(temizledim5)
    msg.edit(temizledim5)
    msg.edit(temizledim5)
    msg.edit(temizledim4)
    msg.edit(temizledim4)
    msg.edit(temizledim4)
    msg.edit(temizledim3)
    msg.edit(temizledim3)
    msg.edit(temizledim3)
    msg.edit(temizledim2)
    msg.edit(temizledim2)
    msg.edit(temizledim2)
    msg.edit(temizledim1)
    msg.edit(temizledim1)
    msg.edit(temizledim1)
    msg.edit(temizledim)
 /*   msg.edit(temizledim5).then(msg => {
      msg.edit(temizledim5).then(msg => {
      msg.edit(temizledim5).then(msg => {
      msg.edit(temizledim5).then(msg => {
      msg.edit(temizledim4).then(msg => {
      msg.edit(temizledim4).then(msg => {
      msg.edit(temizledim4).then(msg => {
      msg.edit(temizledim3)
      })
      })
      })
    })
    })
    })
    })*/
})}
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['sil', 'clear'],
  permLevel: 5
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen Miktarda Mesaj Siler. Maximum 100 Mesaj.',
  usage: 'temizle <miktar>'
};