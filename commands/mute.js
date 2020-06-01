const discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {
    
    if (!message.member.hasPermission(['KICK_MEMBERS'])) {message.channel.send("sorry you do not have permission to do this command").then(message => {
        message.delete({ timeout: 10000 })
      })
      .catch(console.error);
      message.delete({ timeout: 1000 })
}
    var user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!user) return message.channel.send("please say a valid username").then(message => {
        message.delete({ timeout: 1000 })
      })
      .catch(console.error);
      message.delete({ timeout: 10000 })
    if (message.member.hasPermission(['KICK_MEMBERS'])) {

    var muteRole = message.guild.roles.cache.find(role => role.name === "muted");

    if(!muteRole) return message.channel.send("this role doesnt exist").then(message => {
        message.delete({ timeout: 1000 })
      })
      .catch(console.error);
      message.delete({ timeout: 1000 })

    var muteTime = args[1];

    if(!muteTime) return message.channel.send("say a time").then(message => {
        message.delete({ timeout: 10000 })
      })
      .catch(console.error);
      message.delete({ timeout: 1000 })

    await (user.roles.add(muteRole.id));
    message.delete({timeout: 1000})
    let embed = new discord.MessageEmbed()
    .setTitle("Mute:")
    .setDescription(`the player ${user} has been muted for: ${muteTime} by: ${message.author.username}`)
    .setColor("#ffe09c")
    var kanaal = message.guild.channels.cache.find(c => c.name == "𝓵𝓸𝓰𝓼");
    kanaal.send(embed)
    setTimeout(function() {
        user.roles.remove(muteRole.id);
    }, ms(muteTime));
}
    
}
module.exports.help = {
    name: "mute"
}
