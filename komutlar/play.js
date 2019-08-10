const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {
  
  if(!message.member.voiceChannel) return message.channel.send('Komutu Kullanmak İçin Herhangi Bir Ses Kanalına Bağlanın...');
  if(message.guild.me.voiceChannel) return message.channel.send('Maalesef, Bot Zaten Bir Kanala Bağlı');
  if(!args[0]) return message.channel.send('Oynatmam İçin Bir Link Girmelisin!');
  let validate = await ytdl.validateURL(args[0]);
  if(!validate) return message.channel.send('Lütfen Geçerli Bir Link Girin!');
  let info = await ytdl.getInfo(args[0]);
  let connection = await message.member.voiceChannel.join();
  let dispatcher = await connection.play(`https://www.youtube.com/watch?v=PUiNB0UFwJM`, { filter: 'audioonly' });
  //let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly' }));
  message.channel.send(`Şuan da Çalan Müzik: ${info.title}`);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['play'],
  permLevel: 0
};

exports.help = {
  name: 'çal',
  description: 'İstediğiniz Şarkıyı Bota Çaldırır.',
  usage: 'çal [çaldırmak istediğiniz şarkı]'
};
