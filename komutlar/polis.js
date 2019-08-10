var Jimp = require('jimp');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  var user = message.mentions.users.first() || message.author;
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setAuthor(user.username, user.avatarURL)
.setImage('https://images-ext-2.discordapp.net/external/ICU-A4hmVoA40r_anijOm-Oqin2M4Jk7DziBfKjfMy4/%3Fv%3D1/https/cdn.discordapp.com/emojis/431947006936875009.gif')
message.channel.sendEmbed(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['polis'],
  permLevel: 0
};

exports.help = {
  name: 'polisten-kaçın',
  description: `Polisten Kaçın!`,
  usage: 'polisten-kaçın <tag>'
};