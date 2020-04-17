const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
        if (!message.member.roles.cache.some(role => role.name === '𝓒𝓸 𝓛𝓮𝓪𝓭𝓮𝓻','𝓛𝓮𝓪𝓭𝓮𝓻')) {
            return message.reply("You can't delete messages....").then(m => m.delete(5000));
        }


        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Yeah.... That's not a numer? I also can't delete 0 messages by the way.").then(m => m.delete(5000));
        }
        if (!message.member.roles.cache.some(role => role.name === '𝓒𝓸 𝓛𝓮𝓪𝓭𝓮𝓻','𝓛𝓮𝓪𝓭𝓮𝓻')) {
            return message.reply("Sorryy... I can't delete messages.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
            .catch(err => message.reply(`Something went wrong... ${err}`));
    }
}
module.exports.help = {
    name: "purge"
}
