const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (!message.member.roles.cache.some(role => role.name === '𝓒𝓸 𝓛𝓮𝓪𝓭𝓮𝓻','𝓛𝓮𝓪𝓭𝓮𝓻')) {message.channel.send("sorry you do not have permission to do this command")};

    if(!args[0]) return message.channel.send("give a number!");

    if(Number.isInteger(parseInt(args[0]))){

        var amount = parseInt(args[0]) + 1;
        var number = parseInt(args[0]);

        message.channel.bulkDelete(amount).then(() => {

            if(args[0] == 0){
                message.channel.send(`i cant delete 0 messages you dumb`).then(msg => msg.delete(5000))
            }else if(args[0] == 1){
                message.channel.send(`i deleted ${number} message`).then(msg => msg.delete(5000))
            }else{
                message.channel.send(`i deleted ${number} messages`).then(msg => msg.delete(5000))
            }
         });


    }else{
        return message.channel.send("only numbers allowed!")

    }




}
module.exports.help = {
    name: "purge"
}
