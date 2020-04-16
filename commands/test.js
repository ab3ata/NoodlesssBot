const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let embed = new discord.MessageEmbed()
  .setTitle("test")  
  message.channel.send(embed);
}
module.exports.help = {
    name: "test"SDFvxcvxzxczx
}
