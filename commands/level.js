const discord = require("discord.js");
const levelSystem = require("../data/levels.json")
module.exports.run = async (bot, message, args) => {
 
    var idUser = message.author.id;

    if(!levelSystem[idUser]){

        levelSystem[idUser] = {

        xp: 0,
        level: 1
       
        }
    }

    var levelUser = levelSystem[idUser].level;
    var xpUser = levelSystem[idUser].xp;
    var nextLevel = levelUser * 300;

    var whenNextLevel = nextLevel - xpUser

    var embedLevel = new discord.MessageEmbed()
    .setTitle(message.author.username)
    .setColor("#42f5ec")
    .addField("Level:", levelUser, true)
    .addField("xp:", xpUser, true)
    .setFooter(`${whenNextLevel} xp need until levelup`);

    message.channel.send(embedLevel).then(message.delete({timeout: 500}));

}
module.exports.help = {
    name: "level"
}
