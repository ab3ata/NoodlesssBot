const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission(['MANAGE_MESSAGES'])) {
        message.channel.send("sorry you do not have permission to do this command").then(msg => {
            msg.delete({ timeout: 10000 })
          })
          message.delete({ timeout: 1000 })
        };

    if(!args[0]) return message.channel.send("give a number!");
    if (message.member.hasPermission(['MANAGE_MESSAGES'])) {
    if(Number.isInteger(parseInt(args[0]))){

        var amount = parseInt(args[0]) + 1;
        var number = parseInt(args[0]);

        message.channel.bulkDelete(amount);

    
    }else{
        return message.channel.send("only numbers allowed!")
    }
    }




}
module.exports.help = {
    name: "purge"
}
