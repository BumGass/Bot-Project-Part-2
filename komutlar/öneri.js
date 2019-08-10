const Discord = require('discord.js');


exports.run = async(client, message, args) => {

  const asdf = await client.channels.get(message.channel.id).createInvite()
  var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
  
	var öneri = args.slice(0).join(' ');
	var guildID = "532991144112554005";
	var channelID = "608340942444822529";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **m_öneri <mesaj>**");
	} else {
		
		var embed = new Discord.RichEmbed()
    .setColor(message.member.displayHexColor)
			.setTimestamp()
    .setAuthor(`Mowa Bot Öneri Sistemi` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`) 
		//	.addField("Eylem:", "Öneri", true)
      .setThumbnail(message.guild.iconURL)
			.addField("Kullanıcı Adı:", message.author.tag, true)
			.addField("Kullanıcı ID: ", message.author.id, true)
      //.addField("Kullanıcı Durumu:", durm, true)
      .addField("Sunucu Adı: ", message.guild.name, true)
      //.addField("Sunucu Davet Kodu: ", `discord.gg/` + asdf.code, true)
			.addField("Öneri Mesajı: ", öneri, true)
      .setTitle(`Sunucu Davet Linki`)
      .setURL(asdf.url)
		  .setFooter(message.author.username , message.author.avatarURL)
    
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.").then(msg => {
      msg.delete(15000);
    })
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: "Bot Hakkındaki Önerilerinizi Bot Sahiplerine Ulaştırır.", 
  usage: 'öneri <mesaj>' 
};