const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log('${bot.user.username} is online');

    bot.user.setActivity("LightMc", {type: "PLAYING"});

})


bot.login(process.env.token);