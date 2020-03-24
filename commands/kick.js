const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!kickUser) return message.channel.send("User not found");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("srry you cant do this!");

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you cant kick this player");

    var kick = new discord.MessageEmbed()
        .setDescription("kick")
        .setColor("#8c6607")
        .addField("Kicked User", kickUser)
        .addField("Kicked By", message.author)
        .addField("reason", reason);

    var kickChannel = message.guild.channel.find("name", "commands");
    if (!kickChannel) return message.guild.send("Cant find the channel!");

    message.guild.member(kickUser).kick(reason);

    kickChannel.send(kick);

    return;
}

module.exports.help = {
    name: "kick"
}