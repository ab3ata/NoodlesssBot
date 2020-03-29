const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const filter = m => m.author.id === message.author.id;
    mylist = [`:O`, `vraag 2`, `3de vraag`, `laatste vraag`];
    await message.channel.send("Welcome to the staff apply!")
    for (var i = 0; i < mylist.length; i++) {
        await message.channel.send({
            embed: {
                color: 0xFFC300,
                description: mylist[i]
            }.then(async msg => {
                await message.channel.awaitMessages(filter, { max: 1 }).then(Collect => {
                    console.log(Collect.first().content);
                })
            })
        })
    }

}
module.exports.help = {
    name: "test"
}