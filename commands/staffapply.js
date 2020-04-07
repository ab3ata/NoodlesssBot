const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const filter = m => m.author.id === message.author.id;
    testList = [`question 1:`, `question 2:`, `question 4:`, `question 5:`];
    if (!args.length) {
        message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        message.channel.bulkdelete(2)
    }
    else if (args[0] === 'staff') {
        for (var i = 0; i < testList.length; i++) {
            let embed = new discord.MessageEmbed()
                .setTitle(testList[i])
                .setColor(`0xFFC300`);
            await message.channel.send(embed).then(async msg => {
                await message.channel.awaitMessages(filter).then(Collect => {
                    Collect.array();
                    while (i === 3) {
                        i++
                        Array.from(Collect);
                        message.channel.send(Collect.first(5));


                    }
                })
            })
        }
    }
}
module.exports.help = {
    name: "apply"
}