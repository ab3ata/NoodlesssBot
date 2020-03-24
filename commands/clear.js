const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("You dont have permission");

    if (!args[0]) return message.reply("Give a number!");

    if (Number.isInteger(praseInt(args[0]))) {

        var amount = ParseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {
            if(args[0] == 0){
                message.channel.send("cant delete 0 messages").then(msg => msg.delete(3000));
            } else if (args[0] == 1){
                message.channel.send(`you have ${args[0]} message deleted`).then(msg => msg.delete(3000));
            }

            message.channel.send(`You have ${args[0]} messages deleted`).then(msg => msg.delete(3000));

        });

    } else {
        return message.channel.send("give a number!");
    }

}

module.exports.help = {
    name: "purge"
}