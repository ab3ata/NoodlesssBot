const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const filter = m => m.author.id === message.author.id;
    mylist = [`Welcome`];
    mylist[1] = [`hru doing`];
    mylist[2] = [`test`];
    mylist[3] = [`OK!!!!`];
    mylist[4] = [`when??`];
    mylist[5] = [`helppp meee`];
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