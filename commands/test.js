const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.react("👍");
const filter = (reaction, user) => reaction.emoji.name === '👌'
const collector = message.createReactionCollector(filter, { time: 15000 });
collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
collector.on('end', collected => console.log(`Collected ${collected.size} items`));
}
module.exports.help = {
    name: "test"
}