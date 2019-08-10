const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let youtube = args.slice(0).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(`Arama İşlemini Gerçeklerştirmek İçin Kelimeler Girin!`)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
              .setColor("RED")
              .setAuthor(`Mowa Bot Youtube Arama Sistemi`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
              .setTitle(`**Sunucu: ${ message.guild.name}\nAradığın link bulundu...\n${link}**`)
              .setThumbnail(`https://www.techadvisor.co.uk/cmsdata/features/3681165/youtube-logo-png-2069_thumb1200_4-3.png`)
              .setDescription(``)
              .setTimestamp()
              .setFooter(`Sorgulayan: ${message.author.username} `, message.author.avatarURL)
              message.channel.send(embed);
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'youtube',
  description: `Youtube'de Arama Yapar.`,
  usage: 'youtube'
};