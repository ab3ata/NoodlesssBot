const discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {
    
    if (!message.member.roles.cache.some(role => role.name === '𝓒𝓸 𝓛𝓮𝓪𝓭𝓮𝓻', '𝓛𝓮𝓪𝓭𝓮𝓻')) {message.channel.send("sorry you do not have permission to do this command");}
    var user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!user) return message.channel.send("please say a valid username");

    if (message.member.roles.cache.some(role => role.name === '𝓒𝓸 𝓛𝓮𝓪𝓭𝓮𝓻', '𝓛𝓮𝓪𝓭𝓮𝓻')){

    var muteRole = message.guild.roles.cache.find(role => role.name === "muted");

    if(!muteRole) return message.channel.send("this role doesnt exist");

    var muteTime = args[1];

    if(!muteTime) return message.channel.send("say a time")

    await (user.roles.add(muteRole.id));

    message.channel.send(`${user} has been muted for ${muteTime}`);

    setTimeout(function() {
        user.roles.remove(muteRole.id);

        message.channel.send(`${user} has been unmuted`);
    }, ms(muteTime));
}
}
module.exports.help = {
    name: "mute"
}
