const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const filter = m => m.author.id === message.author.id;
    testList = [`vraag 1:`, `vraag 2:`, `vraag 4:`, `vraag 5:`];
    for (var i = 0; i < testList.length; i++) {
        await message.channel.send(testList[i]).then(async msg => {
            await message.channel.awaitMessages(filter, { max: 1 }).then(Collect => {
                console.log(Collect.first().content);
            })
        })
    }
    var kanaal = message.guild.channels.cache.find(c => c.name == "application-log");
    await kanaal.send(Collect);

}
module.exports.help = {
    name: "test"
}