const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let embed = new discord.MessageEmbed()
.setTitle('oof');

message.channel.send(embed).then(msg => {
msg.react(`🤔`)
msg.awaitReactions(`🤔`)
})
}
new Discord.ReactionCollector(message, filter, options);
module.exports.help = {
    name: "testingpurposecommand"
}
