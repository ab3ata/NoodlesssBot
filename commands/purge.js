const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (!message.member.roles.cache.some(role => role.name === '𝓒𝓸 𝓛𝓮𝓪𝓭𝓮𝓻','𝓛𝓮𝓪𝓭𝓮𝓻')) {message.channel.send("sorry you do not have permission to do this command")};

    if(!args[0]) return message.channel.send("give a number!");

    if(Number.isInteger(parseInt(args[0]))){

        var amount = parseInt(args[0]) + 1;
        var number = parseInt(args[0]);

        message.channel.bulkDelete(amount);


    }else{
        return message.channel.send("only numbers allowed!")

    }




}
module.exports.help = {
    name: "purge"
}
