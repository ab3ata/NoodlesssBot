const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    for (var i=0; i < 10; i++) {
        message.channel.send({
            embed: {
                color: 0xFFC300,
                description: "this is a test"
            }})
    }



}
module.exports.help = {
    name: "test"
}