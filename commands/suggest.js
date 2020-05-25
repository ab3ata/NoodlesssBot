const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    var suggestion = args
    if(suggestion === 0){
        message.channel.send(`please give your suggestion!`);

    if(!suggestion === 0){
        let embed = new discord.MessageEmbed()
        .setTitle("Suggestion")
        .setDescription(`${args}`)
        .setColor("#ffe09c")
        var kanaal = message.guild.channels.cache.find(c => c.name == "𝓵𝓸𝓰𝓼");
        kanaal.send(embed)
    }
    }
}
module.exports.help = {
    name: "suggest"
}
