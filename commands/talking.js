const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new discord.MessageEmbed()
  .setTitle("hi how are you today?")  
  message.channel.send(embed);
}
module.exports.help = {
    name: "hello"
}
