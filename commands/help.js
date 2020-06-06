const discord = require("discord.js");
const botConfig = require("../botconfig.json");
var prefix = botConfig.prefix;
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission(['MANAGE_WEBHOOKS'])) {
        let embed = new discord.MessageEmbed()
        .setTitle("Help menu NoodlesBot")
        .setDescription("Commands:")
        .addField(prefix + `help`, `The command for this help menu!`)
        .addField(prefix + `suggest`, `make a suggestion with this!`)









        
        .setColor("#214E8A")
    message.author.send(embed)
    message.channel.send("it is in your pm :)").then(message => {
        message.delete({ timeout: 10000 })
      })
      .catch(console.error);
          message.delete({ timeout: 3000 })
    } 
    if (message.member.hasPermission(['MANAGE_WEBHOOKS'])) {
    let embed = new discord.MessageEmbed()
    .setTitle("Mod Help menu NoodlesBot")
    .setDescription("Commands:")
    .addField(prefix + `help`, `The command for this help menu!`)
    .addField(prefix + `suggest`, `make a suggestion with this!`)
    .addField(prefix + `mute`, `silence someone when he is not following the rules`)
    .addField(prefix + `unmute`, `if somebody muted someone wrongly`)
    .addField(prefix + `purge`, `clear a number of messages!`)
    .addField(prefix + `announce`, `announce something to everybody`)










    .setColor("#214E8A")
    message.author.send(embed)
    message.channel.send("it is in your pm :)").then(message => {
        message.delete({ timeout: 10000 })
      })
      .catch(console.error);
      message.delete({ timeout: 3000 })
  }
}
module.exports.help = {
    name: "help"
}
