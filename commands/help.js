const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let embed = new discord.MessageEmbed()
    .setTitle(`Help`)
    .setDescription(`this is a list of help commands:`)
    .setColor(`#0xFFC300`)
    .addFields(
        { name: `!apply staff`, value: `do this command to apply for the staff position` },
        { name: `!apply builder`, value: `do this command to apply for the builder position` },        
    )
    message.channel.send(embed);

    if(member.roles.cache.has('668221965198426113')){
    let embed = new discord.MessageEmbed()
    .setTitle(`Help`)
    .setDescription(`this is a list of help commands:`)
    .setColor(`#0xFFC300`)
    .addFields(
        { name: `!apply staff`, value: `do this command to apply for the staff position` },
        { name: `!apply builder`, value: `do this command to apply for the builder position` },
        { name: `!work`, value: `an command to see if it works?` },        
    )
    }
}
module.exports.help = {
    name: "help"
}