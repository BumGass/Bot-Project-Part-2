const Discord = require('discord.js');

const susamsokak = [
    "https://thumbs.gfycat.com/AlarmingForcefulHerald-max-1mb.gif",
    "https://img-s2.onedio.com/id-54393f0dcf3346484c90599f/rev-0/w-500/s-17e2e015c0d303123b92548592806f4cd723e545.gif",
    "https://thumbs.gfycat.com/FastMediumIvorybilledwoodpecker-max-1mb.gif",
    "https://img-s2.onedio.com/id-5439402be0c894e74d042387/rev-0/w-500/s-96bb5a29839bbd8741e4683b3b5f038ae91f014d.gif",
    "https://i.pinimg.com/originals/84/e8/69/84e8695ad1d0d893b03b210930c7b030.gif",
    "https://2.bp.blogspot.com/-YSO5VSUUQ0U/WiradBlJnHI/AAAAAAAAABo/gEFAmagqBOYJsqtqTMiQQgJmk_xYFXYCQCK4BGAYYCw/s320/tumblr_nmsni1gEw41qd4fqho1_400.gif",
    "https://i.pinimg.com/originals/e8/7e/62/e87e6299e8b462d19b592ae05cb81aa6.gif"
];

exports.run = (client, message, args) => {
  
  var susamfoto = susamsokak[Math.floor(Math.random() * susamsokak.length)];
  
    const gonder = new Discord.RichEmbed()
  .setAuthor(`Mowa Bot Susam Sokağı Sistemi`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
  .setTitle(`Şansına Bak Ne Çıktı...`)
  .setImage(susamfoto)
  .setTimestamp()
  .setFooter(`İsteyen: ${message.author.username} `, message.author.avatarURL)
  message.channel.sendEmbed(gonder).then(msg => {
    msg.react(`😄`);
    msg.react(`😜`);
    msg.react(`😐`);
    msg.react(`😑`);
    msg.react(`😠`);
    msg.react(`😡`);
    msg.react(`💩`);
})
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['susamsok', 'susamsokagi', 'susamsokak', 'susamsokakı', 'susamsokaki', 'susam-sok', 'susam-sokagi', 'susam-sokak', 'susam-sokakı', 'susam-sokaki', 'susam sok', 'susam sokagi', 'susam sokak', 'susam sokakı', 'susam sokaki'],
  permLevel: 0
};

exports.help = {
  name: 'susamsokağı',
  description: `Rastgele Komik Fotoğraflar/GIF'ler.`,
  usage: 'susamsokağı'
};