const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const filter = m => m.author.id === message.author.id;
    testList = [`vraag 1:`, `vraag 2:`, `vraag 4:`, `vraag 5:`];
    for (var i = 0; i < testList.length; i++) {
        let embed = new discord.MessageEmbed()
            .setTitle(testList[i])
            .setColor(`0xFFC300`);
        await message.channel.send(embed).then(async msg => {
            await message.channel.awaitMessages(filter, { max: 1 }).then(Collect => {
                answers = Collect
            })
        })
    }
    const embed2 = new discord.MessageEmbed()
    .setColor('0xFFC300')
    .setTitle(answers)
await message.channel.send(embed2)
}
module.exports.help = {
    name: "test"
}