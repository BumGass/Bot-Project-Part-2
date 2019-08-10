const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
 
exports.run = async (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
   const asdf = await client.channels.get(message.channel.id).createInvite()
if (mesaj.length < 1) return message.reply('Gönderebilmem için herhangi bir mesaj yazmalısın.');
  const invite = new Discord.RichEmbed()
  .setAuthor("Mowa Bot Sunucu Tanıtım Sistemi", `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
  .setTitle(`**» ${message.guild.name} Discord Sunucusu**`)
  .setDescription(`**${mesaj}**`)  
  .setThumbnail(message.guild.iconURL)
  .addField('**» Sunucu Sahibi : **', message.author.tag, true)
  .addField('**» Davet Linki : **', asdf.url, true)
  .setTimestamp()
  .setFooter(`Gönderen : ${message.author.tag} `, message.author.avatarURL)
  client.channels.get(`608341012120731658`).sendEmbed(invite);
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  var channel = client.channels.find('id', '608341012120731658')
      
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucutanıt'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-tanıt',
  description: 'Sunucunuzu Tanıtır.',
  usage: 'sunucu-tanıt [mesaj]'
};
