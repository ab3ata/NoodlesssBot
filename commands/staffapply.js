const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const filter = m => m.author.id === message.author.id;
    mylist = [`Welcome`, `test message`, `test message2`, `test message3`, `testmessages`];
    for (var i = 0; i < mylist.length; i++) {
        message.channel.send().then(msg => {
            message.channel.awaitMessages(filter, { max: 1 }).then(collected2 => {
            })
                ({
                    embed: {
                        color: 0xFFC300,
                        description: mylist[i]
                    }
                })
            })
        }
}
    module.exports.help = {
        name: "test"
    }