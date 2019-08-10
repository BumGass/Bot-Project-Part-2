const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const clientname = ayarlar.clientname;
const clientlogo = ayarlar.clientlogo;
const moment = require('moment');
require('moment-duration-format');

exports.run = (client, message, params) => {

    var aylar = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    }
    
    var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")
  var user = message.mentions.users.first() || message.author;
    if (message.channel.type !== "group") {
        var Durum = user.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
    /*  const tarih = moment(user.createdAt).format('DD') aylar[moment(user.createdAt).format('MM')] moment(user.createdAt).format('YYYY HH:mm:ss');
      const btarih = moment(message.createdAt).format('DD') aylar[moment(message.createdAt).format('MM')] ${moment(message.createdAt).format('YYYY HH:mm:ss');*/
      .setAuthor(`${clientname} Bot Kullanıcı Bilgi Sistemi`, clientlogo)
      .setColor(Durm)
      .setTimestamp()
      .setThumbnail(user.avatarURL)
      .addField('Ad:', user.username + '#' + user.discriminator, true)
      .addField('ID:', user.id, true)
      .addField('Kayıt tarihi:', `${moment(user.createdAt).format('DD')} ${aylar[moment(user.createdAt).format('MM')]} ${moment(user.createdAt).format('YYYY HH:mm:ss')}`, true)
      .addField('Durum:', durm, true)
      .addField('Şu an oynadığı oyun:', user.presence.game ? user.presence.game.name : 'Şu an oyun oynamıyor', true)
      .addField('BOT mu?', user.bot ? '\n Evet' : 'Hayır', true)
      .setFooter(`Sorgulayan: ${message.author.tag} `, message.author.avatarURL)
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı', 'kullanıcı bilgi', 'kbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcıbilgi',
  description: 'Komutu Kullanan Kişinin veya Etiketlediği Kişi Hakkında Bilgi Verir.',
  usage: 'kullanıcıbilgi'
};
