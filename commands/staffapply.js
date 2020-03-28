const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const filter = m => m.author.id === message.author.id;
    mylist = [`:O`, `vraag 2`, `3de vraag`, `laatste vraag`];
    await message.channel.send("welkom Je dient de volgende vragen te beantwoorden alvorens je verder kan.")
    for (var i = 0; i < mylist.length; i++) {
        await message.channel.send(mylist[i]).then(async msg => {
            await message.channel.awaitMessages(filter, { max: 1 }).then(Collect => {
                console.log(Collect.first().content);
            })
        })
    }
    message.channel.send({
        embed: {
            color: 0xFFC300,
            description: Collect
        }})
    var kanaal = message.guild.channels.cache.find(c => c.name == "application-log");
    await kanaal.send(applications);
}
module.exports.help = {
    name: "test"
}