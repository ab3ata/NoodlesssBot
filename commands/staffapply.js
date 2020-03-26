const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const filter = m => m.author.id === message.author.id;
    mylist = [`Welcome`,  message.channel.awaitMessages(filter, { max: 1 }).then(collected2 => { `when??`}), `how are you doing`, `when did you decided to ?`, `urg testmessages`];
    for (var i = 0; i < mylist.length; i++) {
            message.channel.send({
                embed: {
                    color: 0xFFC300,
                    description: mylist[i]
                    }})
    }
}
module.exports.help = {
    name: "test"
}