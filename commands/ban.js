const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!banUser) return message.channel.send("User not found");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("srry you cant do this!");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you cant ban this player");

    var ban = new discord.MessageEmbed()
        .setDescription("ban")
        .setColor("#8c6607")
        .addField("banned User", banUser)
        .addField("banned By", message.author)
        .addField("reason", reason);

    var banChannel = message.guild.channel.find("name", "commands");
    if (!banChannel) return message.guild.send("Cant find the channel!");

    message.guild.member(banUser).ban(reason);

    banChannel.send(ban);

    return;

}

module.exports.help = {
    name: "ban"
}