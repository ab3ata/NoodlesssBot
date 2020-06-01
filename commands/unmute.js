const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    
    if (!message.member.roles.cache.some(role => role.name === '𝓒𝓸 𝓛𝓮𝓪𝓭𝓮𝓻','𝓛𝓮𝓪𝓭𝓮𝓻')) {message.channel.send("sorry you do not have permission to do this command").then(msg => {
        msg.delete({ timeout: 10000 })
      })
      .catch(console.error);
      msg.delete({ timeout: 1000 })
}
    var user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!user) return message.channel.send("please say a valid username").then(msg => {
        msg.delete({ timeout: 10000 })
      })
      .catch(console.error);
      msg.delete({ timeout: 1000 })

    if (message.member.roles.cache.some(role => role.name === '𝓒𝓸 𝓛𝓮𝓪𝓭𝓮𝓻','𝓛𝓮𝓪𝓭𝓮𝓻','𝓣𝓮𝓬𝓱-𝓛𝓮𝓪𝓭𝓮𝓻')){

    var muteRole = message.guild.roles.cache.find(role => role.name === "muted");

    if(!muteRole) return message.channel.send("this role doesnt exist").then(msg => {
        msg.delete({ timeout: 10000 })
      })
      .catch(console.error);
      msg.delete({ timeout: 1000 })

    await (user.roles.add(muteRole.id));
    message.delete({timeout: 10000})
    let embed = new discord.MessageEmbed()
    .setTitle("UnMute:")
    .setDescription(`the player ${user} has been unmuted by: ${message.author.username}`)
    .setColor("#ffe09c")
    var kanaal = message.guild.channels.cache.find(c => c.name == "𝓵𝓸𝓰𝓼");
    kanaal.send(embed)
        user.roles.remove(muteRole.id);


    }
}
module.exports.help = {
    name: "unmute"
}
