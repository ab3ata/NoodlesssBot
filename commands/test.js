const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let embed = new discord.MessageEmbed()
  .setTitle("test")  
  message.react('👌')
  .then(console.log)
  .catch(console.error);
    const filter = (reaction, user) => reaction.emoji.name === '👌' && user.id === 'someID';
    const collector = message.createReactionCollector(filter, { time: 15000 });
    collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
    collector.on('end', collected => console.log(`Collected ${collected.size} items`));
}
module.exports.help = {
    name: "testingpurposecommand"
}
