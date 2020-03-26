const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    mylist = [`testing`, `tesstterrr`];
    for (var i=0; i < mylist.length; i++) {
        message.channel.send({
            embed: {
                color: 0xFFC300,
                description: `mylist[i]`
            }})
    }



}
module.exports.help = {
    name: "test"
}