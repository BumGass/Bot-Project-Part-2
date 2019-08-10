var Jimp = require('jimp');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read("https://images.onlinelabels.com/images/clip-art/cyberscooty/RIP-171351.png", (err, image) => {
            image.resize(204, 250)
            image.greyscale()
            Jimp.read(user.avatarURL, (err, avatar) => {
                avatar.resize(90, 90)
                image.composite(avatar, 55, 120).write(`./img/rip/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/rip/${bot.user.id}-${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rip',
  description: `Profil Fotoğrafınızı Mezartaşına İşler.`,
  usage: 'rip'
};