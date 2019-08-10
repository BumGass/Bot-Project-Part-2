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
    var onlineMembers = message.guild.members.filter(member => member.presence.status !== "offline")
    if (message.channel.type !== "group") {
      const kullanicibilgimk = new Discord.RichEmbed()
    /*  const tarih = moment(user.createdAt).format('DD') aylar[moment(user.createdAt).format('MM')] moment(user.createdAt).format('YYYY HH:mm:ss');
      const btarih = moment(message.createdAt).format('DD') aylar[moment(message.createdAt).format('MM')] ${moment(message.createdAt).format('YYYY HH:mm:ss');*/
      .setAuthor(`${clientname} Bot Sunucu Bilgi Sistemi`, clientlogo)
      .setColor()
      .setTimestamp()
      .setThumbnail(message.guild.iconURL)
      .addField('Ad :', message.guild.name, true)
      .addField('ID :', message.guild.id, true)
      .addField('Açılış Tarihi :', `${moment(message.guild.createdAt).format('DD')} ${aylar[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')}`, true)
      .addField(`Toplam Üye Sayısı : ${message.guild.memberCount}`, `Toplam Çevrimiçi Üye : ${onlineMembers}`)
      .setFooter(`Sorgulayan: ${message.author.tag} `, message.author.avatarURL)
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['server', 'server bilgi', 'sbilgi', 'serverbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Komutu Kullanan Kişinin veya Etiketlediği Kişi Hakkında Bilgi Verir.',
  usage: 'sunucubilgi'
};
