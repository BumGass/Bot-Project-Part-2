const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args, params) => {
  let sayfa = args.slice(0).join(' ');
  
  
  const yardımsayfa = new Discord.RichEmbed()
    .setColor(0x6441a5)
    .setDescription(``)
    .setAuthor(`Mowa Bot Komutları - Sayfa (5-5) - Komut (0/48)` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`) 
  .addField(`${ayarlar.prefix}yardım (Sayfa 1-5) = `, `Sayfalar 1-2-3-4-5 | Toplam Komut Sayısı : 47`)
  .setFooter(message.author.username + `, için Yardım Bilgileri`, message.author.avatarURL)
  
  
  const yardımyok = new Discord.RichEmbed()
    .setColor(0x6441a5)
    .setAuthor(`Mowa Bot Komutları - Sayfa (${sayfa}-5)` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`) 
    .setTitle(`Aradığınız Sayfa Bulunamadı!`)
    .addField(`**Mevcut Sayfalar :**`, `Sayfa 1 Sayfa 2\nSayfa 3 Sayfa 4 Sayfa 5`, true)
    .addField(`**Komut Kullanımı :**`, `${ayarlar.prefix}yardım Sayfa (1-5)`, true)
    .setThumbnail(`https://www.e-zigurat.com/innovation-school/wp-content/uploads/sites/5/2019/01/404gif-1.gif`)
    .setImage(`https://cdn.glitch.com/1ec6e74a-3d83-40d5-a481-de1188e3b14d%2F404.gif?v=1562978743594`)
    .setFooter(message.author.username + `, için Yardım Bilgileri`, message.author.avatarURL)
  
  // SAYFA 1 BAŞLANGIÇ
  
  const yardım1 = new Discord.RichEmbed()
    .setColor(0x6441a5)
    .setDescription(``)
    .setAuthor(`Mowa Bot Komutları - Sayfa (1-5) - Komut (12/48)` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
  .addField(`${ayarlar.prefix}1vs1 = `, `İstediğiniz Kişi ile 1vs1!`)
  .addField(`${ayarlar.prefix}steam = `, `Aradağınız Oyunun Steamdaki Fiyatına Bakmanızı Sağlar.`)
  .addField(`${ayarlar.prefix}alıntı = `, `Bir Mesaj Alıntılar.`)
  .addField(`${ayarlar.prefix}atatürk = `, `Atatürk Resmi Gönderir.`)
  .addField(`${ayarlar.prefix}logo = `, `Logonuzu Gösterir.`)
  .addField(`${ayarlar.prefix}bağış = `, `Bağış Bilgileri İçin Kullanılır.`)
  .addField(`${ayarlar.prefix}destek = `, `Destek Tablebi Oluşturur.`)
  .addField(`${ayarlar.prefix}canlıdestek = `, `Canlı Destek Tablebi Oluşturur. [BETA]`)
  .addField(`${ayarlar.prefix}duvarkağıdı = `, `Duvar Kağıdı Almak İçin Kullanılır.`)
  .addField(`${ayarlar.prefix}deepweb = `, `Troll Amaçlı Bir Deep Web Videosu.(Dikkat Video Küfür Barındırmaktadır)`)
  .addField(`${ayarlar.prefix}emojiyazı = `, `Yazıyı Emoji Haline Getirir.`)
  .addField(`${ayarlar.prefix}emojiyükle = `, `Belirttiğiniz link ve isimde emoji yükler.`)
 /* .addField(`\:heart: Moderasyon`, `m_yardım-mod`, true)
  .addField(`\:smile: Eğlence`, `m_yardım-eğlence`, true)
  .addField(`\:closed_book: Ekstra`, `m_yardım-ekstra`, true)
  .addField(`\:video_game: Oyunlar`, `m_yardım-oyunlar`, true)*/
  .setFooter(message.author.username + `, için Yardım Bilgileri`, message.author.avatarURL)
  
  // SAYFA 1 BİTİŞ SAYFA 2 BAŞLANGIÇ
  
  const yardım2 = new Discord.RichEmbed()
    .setColor(0x6441a5)
    .setDescription(``)
    .setAuthor(`Mowa Bot Komutları - Sayfa (2-5) - Komut (12/48)` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)    
  .addField(`${ayarlar.prefix}espri = `, `Espri Yapar.`)
  .addField(`${ayarlar.prefix}fb = `, `PP'nize Fenerbahçe Çerçevesi Ekler.`)
  .addField(`${ayarlar.prefix}gs = `, `PP'nize Galatasaray Çerçevesi Ekler.`)
  .addField(`${ayarlar.prefix}bjk = `, `PP'nize Beşiktaş Çerçevesi Ekler.`)
  .addField(`${ayarlar.prefix}havadurumu = `, `Hava Durumunu Gösterir.`)
  .addField(`${ayarlar.prefix}herkesebendençay = `, `Herkese Çay Verir.`)
  .addField(`${ayarlar.prefix}servericon = `, `Serverin İconunu Gönderir.`)
  .addField(`${ayarlar.prefix}invite = `, `İnvite Linkini Almak İçin Kullanılır.`)
  .addField(`${ayarlar.prefix}istatistik = `, `Bot İstatistiğini Gösterir.`)
  .addField(`${ayarlar.prefix}kullanıcıbilgi = `, `Komutu Kullanan Kişinin veya Etiketlediği Kişi Hakkında Bilgi Verir.`)
  .addField(`${ayarlar.prefix}mcödül = `, `Minecraft Başarı Resmi Gönderir.`)
  .addField(`${ayarlar.prefix}rastgeleşifre = `, `Rastgele bir şifre oluşturur.`)
  
  .setFooter(message.author.username + `, için Yardım Bilgileri`, message.author.avatarURL)
  
  // SAYFA 2 BİTİŞ SAYFA 3 BAŞLANGIÇ
  
  const yardım3 = new Discord.RichEmbed()
    .setColor(0x6441a5)
    .setDescription(``)
    .setAuthor(`Mowa Bot Komutları - Sayfa (3-5) - Komut (12/48)` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`) 
  .addField(`${ayarlar.prefix}reklam-taraması = `, `Sunucu İçerisindeki Tüm Reklamları Tarar.`)
  .addField(`${ayarlar.prefix}rol-bilgi = `, `Etiketlediğiniz Rol Hakkında Bilgi Alırsınız.`)
  .addField(`${ayarlar.prefix}simit = `, `Simit Yer.`)
  .addField(`${ayarlar.prefix}slots = `, `Slots Oyunu Oynatır.`)
  .addField(`${ayarlar.prefix}sorusor = `, `Sorularınızı Cevaplar.`)
  .addField(`${ayarlar.prefix}spotify = `, `Etiketlediğiniz Kişinin Spotify Üzerinde Dinlediği Şarkının Bilgilerini Verir.`)
  .addField(`${ayarlar.prefix}stresçarkı = `, `Sizin için bir stres çarkı çevirir.`)
  .addField(`${ayarlar.prefix}temizle = `, `Belirtilen Miktarda Mesaj Siler.`)
  .addField(`${ayarlar.prefix}wasted = `, `PP'nize Wasted Efekti Ekler.`)
  .addField(`${ayarlar.prefix}yardım = `, `Tüm komutları gösterir.`)
  .addField(`${ayarlar.prefix}yaz = `, `İstediğiniz şeyi bota yazdırır.`)
  .addField(`${ayarlar.prefix}yazıtura = `, `Yazı-Tura Atar.`)
  .setFooter(message.author.username + `, için Yardım Bilgileri`, message.author.avatarURL)
  
  // SAYFA 3 BİTİŞ SAYFA 4 BAŞLANGIÇ
  
  const yardım4 = new Discord.RichEmbed()
    .setColor(0x6441a5)
    .setDescription(``)
    .setAuthor(`Mowa Bot Komutları - Sayfa (4-5) - Komut (12/48)` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`) 
  .addField(`${ayarlar.prefix}youtube = `, `Youtube'de Arama Yapar.`)
  .addField(`${ayarlar.prefix}setnick = `, `Botun Sunucudaki İsmini Değiştirir.`)
  .addField(`${ayarlar.prefix}susamsokağı = `, `Rastgele Susam Sokağı Fotoğrafları/GIF'leri.`)
  .addField(`${ayarlar.prefix}sunucutanıt = `, `Sunucunuzu Tanıtır.`)
  .addField(`${ayarlar.prefix}statayarla = `, `Sunucu İstatistikleri İçin Kategori ve Kanallar Kurar.`)
  .addField(`${ayarlar.prefix}stattemizle = `, `Sunucu İstatistikleri İçin Açılan Kategori ve Kanalları Siler.`)
  .addField(`${ayarlar.prefix}vote = `, `Vote Linkleri İçin Kullanılır.`)
  .addField(`${ayarlar.prefix}rip = `, `Profil Fotoğrafınızı Mezartaşına İşler.`)
  .addField(`${ayarlar.prefix}ara = `, `Google'da Arama Yapar.`)
  .addField(`${ayarlar.prefix}nahçek = `, `İstediğiniz Kişiye Nah Çeker.`)
  .addField(`${ayarlar.prefix}polisten-kaçın = `, `Etiketlediğiniz Kişinin Peşine Polis Takar.`)
  .addField(`${ayarlar.prefix}fbi = `, `Etiketlediğiniz Kişi FBI Baskınına Uğrar... FBI Open The Door!`)
  .setFooter(message.author.username + `, için Yardım Bilgileri`, message.author.avatarURL)
  
  // SAYFA 4 BİTİŞ SAYFA 5 BAŞLANGIÇ
  
  const yardım5 = new Discord.RichEmbed()
    .setColor(0x6441a5)
    .setDescription(``)
    .setAuthor(`Mowa Bot Komutları - Sayfa (5-5) - Komut (2/48)` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`) 
  .addField(`${ayarlar.prefix}herkesebendençay = `, `Herkese Çay Verir.`)
  .addField(`${ayarlar.prefix}shard = `, `Botun Shard Bilgilerini Verir.`)
  .setFooter(message.author.username + `, için Yardım Bilgileri`, message.author.avatarURL)
  
  // SAYFA 5 BİTİŞ
  /*
  const yardımeğlence = new Discord.RichEmbed()
    .setColor(0x6441a5)
    .setDescription(``)
    .setAuthor(`Mowa Bot Komutları - Eğlence Komutları - Komut (21/48)` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`) 
  .addField(`${ayarlar.prefix}1vs1 = `, `İstediğiniz Kişi ile 1vs1.`)
  .addField(`${ayarlar.prefix}atatürk = `, `Atatürk Resmi Gönderir.`)
  .addField(`${ayarlar.prefix}logo = `, `Logonuzu Gönderir.`)
  .addField(`${ayarlar.prefix}deepweb = `, `Troll Amaçlı Bir Deep Web Videosu.(Dikkat Video Küfür Barındırmaktadır)`)
  .addField(`${ayarlar.prefix}duvarkağıdı = `, `Duvar Kağıdı Almak İçin Kullanılır.`)
  .addField(`${ayarlar.prefix}espri = `, `Espri Yapar.`)
  .addField(`${ayarlar.prefix}fb = `, `PP'nize Fenerbahçe Çerçevesi Ekler.`)
  .addField(`${ayarlar.prefix}gs = `, `PP'nize Galatasaray Çerçevesi Ekler.`)
  .addField(`${ayarlar.prefix}bjk = `, `PP'nize Beşiktaş Çerçevesi Ekler.`)
  .addField(`${ayarlar.prefix}herkesebendençay = `, `Herkese Çay Verir.`)
  .addField(`${ayarlar.prefix}servericon = `, `Serverin İconunu Verir.`)
  .addField(`${ayarlar.prefix}sorusor = `, `Sorularınızı Cevaplar.`)
  .addField(`${ayarlar.prefix}stresçarkı = `, `Sizin İçin Bir Stres Çarkı Çevirir.`)
  .addField(`${ayarlar.prefix}wasted = `, `PP'nize Wasted Efekti Ekler..`)
  .addField(`${ayarlar.prefix}yazıtura = `, `Yazı-Tura Atar.`)
  .addField(`${ayarlar.prefix}yaz = `, `İstediğiniz Şeyi Bota Yazdırır.`)
  .addField(`${ayarlar.prefix}susamsokağı = `, `Rastgele Susam Sokağı Fotoğrafları/GIF'leri.`)
  .addField(`${ayarlar.prefix}rip = `, `Profik Fotoğrafınızı Mezartaşına İşler.`)
  .addField(`${ayarlar.prefix}nahçek = `, `İstediğiniz Kişiye Nah Çeker.`)
  .addField(`${ayarlar.prefix}polisten-kaçın = `, `Etiketlediğiniz Kişinin Peşine Polis Takar.`)
  .addField(`${ayarlar.prefix}fbi = `, `İstediğiniz Şeyi Bota Yazdırır.`)
  .setFooter(message.author.username + `, için Yardım Bilgileri`, message.author.avatarURL)
  */
   const yardım666 = new Discord.RichEmbed()
    .setColor(0x6441a5)
    .setAuthor(`Mowa Bot - Sayfa (${sayfa}-5)` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`) 
    .setTitle('Çarpılmak mı İstiyorsun?')
    .setImage(`https://media.tenor.com/images/497e052f5ae453e0b35464492937f1c8/tenor.gif`)
    .setFooter(message.author.username + `, için Çarpılma Bilgileri`, message.author.avatarURL)
  
  
  let command = params[0];
  command = client.commands.get(command);
  if(sayfa === "1") return message.channel.sendEmbed(yardım1);
  if(sayfa === "") return message.channel.sendEmbed(yardımsayfa);
  if(sayfa === "2") return message.channel.sendEmbed(yardım2);
  if(sayfa === "3") return message.channel.sendEmbed(yardım3);
  if(sayfa === "4") return message.channel.sendEmbed(yardım4);
  if(sayfa === "5") return message.channel.sendEmbed(yardım5);
   if(sayfa === "666") return message.channel.sendEmbed(yardım666);
  //if(sayfa === "eğlence") return message.channel.sendEmbed(yardımeğlence);
  else if (sayfa === command) {
    if (client.commands.has(command)) {
      
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  } else return message.channel.sendEmbed(yardımyok);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y', 'yardım', 'yardim', 'Yardım', 'Yardim'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [sayfa]'
};