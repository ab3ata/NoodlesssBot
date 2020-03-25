const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
        .setTitle('oof');

    message.channel.send(embed).then(msg => {
        msg.react(`🤔`)
        msg.awaitReactions(`🤔`)
    })
}
module.exports.help = {
    name: "test"
}