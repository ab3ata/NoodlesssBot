const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const filter = m => m.author.id === message.author.id;
    mylist = [`Welcome to the staff application!`, `Why do you want to be staff?`, `have you ever been staff`];
    for (var i=0; i < mylist.length; i++) {
        message.channel.awaitMessages(filter, { max: 1 }).then(collected => {
        message.channel.send({
            embed: {
                color: 0xFFC300,
                description: mylist[i]
            }})
        })
    }



}
module.exports.help = {
    name: "test"
}