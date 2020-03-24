const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.MessageEmbed()
        .setDescription("Discord bot info")
        .setColor('#8c6607')
        .setThumbnail(botIcon)
        .addField('bot naam', bot.user.username)
        .addField("gemaakt op", bot.user.createdAt);

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}