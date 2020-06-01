const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission(['KICK_MEMBERS'])) {message.channel.send("sorry you do not have permission to do this command").then(message => {
        message.delete({ timeout: 10000 })
      })
      .catch(console.error);
      message.delete({ timeout: 1000 })
}
if (message.member.hasPermission(['KICK_MEMBERS'])) {
    if(args.length === 0){
        message.channel.send(`please give your announcement`).then(msg => {
          msg.delete({ timeout: 10000 })
        })
        .catch(console.error);
        message.delete({timeout: 1000})
        return true;
    }
    var argumenten = args.join(" ")
    if(args.length >= 0){
        let embed = new discord.MessageEmbed()
        .setTitle(`New Announcement!`)
        .setDescription(`@everyone`)
        .addField(`announcement:`,`${argumenten}`)
        .setFooter(`announcement from: ${message.author.username}`)
        .setColor("#A6021B")
        var kanaal = message.guild.channels.cache.find(c => c.name == "𝓪𝓷𝓷𝓸𝓾𝓷𝓬𝓮𝓶𝓮𝓷𝓽𝓼");
        kanaal.send(embed)
        message.delete({timeout: 1000})
    }
}
}
module.exports.help = {
    name: "announce"
}
