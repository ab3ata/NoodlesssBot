const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(args.length === 0){
        message.channel.send(`please say your suggestion out loud so everybody can hear it!`).then(msg => {
          msg.delete({ timeout: 10000 })
        })
        .catch(console.error);
        message.delete({timeout: 1000})
        return true;
    }
    var argumenten = args.join(" ")
    if(args.length >= 0){
        let embed = new discord.MessageEmbed()
        .setTitle("New Suggestion")
        .setDescription(`suggestion by: ${message.author.username}`)
        .addField(`suggestion:`, `${argumenten}`)
        .setColor("#A6021B")
        var kanaal = message.guild.channels.cache.find(c => c.name == "𝓵𝓸𝓰𝓼");
        kanaal.send(embed)
        message.delete({timeout: 1000})
    }
}
module.exports.help = {
    name: "suggest"
}
