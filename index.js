const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log('LightMc bot is online!');

    bot.user.setActivity("LightMc", { type: "PLAYING" });

});

bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if (command === `${prefix}hallo`) {

        return message.channel.send("Hallo");

    }

    if (command === `${prefix}info`) {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setDescription("Discord bot info")
            .setColor('#8c6607')
            .setThumbnail(botIcon)
            .addField('bot naam', bot.user.username);

        return message.channel.send(botEmbed);

    }

});


bot.login(process.env.token);