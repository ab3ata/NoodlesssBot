const Discord = require('discord.js');
const botConfig = require("./botconfig.json")

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const fs = require("fs");

fs.readdir("./commands/" , (err, Files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js")

    if(jsFiles.length <=0) {
        console.log("kan geen files vinden");
        return;
    }

    jsFiles.array.forEach(element => {
        
        var fileGet = require('.commands/$(f)');
        console.log("de file $(f) is geladen");

        bot.commands.set(fileGet.help.name, fileGet);
    });
})
bot.on("ready", async () => {
    console.log('${bot.user.username} is online!')
})
bot.on("message", async message => {
    var commands = bot.commands.get(command.slice(prefix.length));

    if(commands) commands.run(bot, message, args);
})
bot.login(process.env.token);