const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const levelSystem = require("./data/levels.json")

const fs = require("fs")

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("kan geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`de file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});


bot.on("ready", async () => {

    console.log('NOODLES bot is online!');

    bot.user.setActivity("GIVING LENA NOODLESS", { type: "" });

});
bot.on("message", async message => {

    if (message.author.bot) return;



    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    if(commands) commands.run(bot, message, arguments);

    var randomXp = Math.floor(Math.random(1) * 15) + 1;

    var idUser = message.author.id;

    if(!levelSystem[idUser]){

        levelSystem[idUser] = {

        xp: 0,
        level: 0
       
        }
    }

    levelSystem[idUser].xp += randomXp;

    var levelUser = levelSystem[idUser].level;
    var xpUser = levelSystem[idUser].xp;
    var nextLevel = levelUser * 300;

    if(nextLevel === 0) nextLevel = 100;

    if(xpUser >= nextLevel){

        levelSystem[idUser].level += 1;

        fs.writeFile("./data/levels.json", JSON.stringify(levelSystem), err =>{
            if(err) console.log(err);
        });

        var embedLevel = new discord.MessageEmbed()
        .setDescription("***Level Up***")
        .setColor("#42f5ec")
        .addField("New Level:", levelSystem[idUser].level);

        message.channel.send(embedLevel).then({timeout: 10000})

    }
});


bot.login(process.env.token);