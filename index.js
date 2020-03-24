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
            .addField('bot naam', bot.user.username)
            .addField("gemaakt op", bot.user.createdAt);

        return message.channel.send(botEmbed);

    }

    if (command === `${prefix}serverinfo`) {

        var icon = message.guild.iconURL;

        var serverEmbed = new discord.MessageEmbed()
            .setDescription("server info")
            .setColor('#8c6607')
            .setThumbnail(icon)
            .addField('bot naam', bot.user.username)
            .addField("gemaakt op", bot.user.createdAt);






            return message.channel.send(serverEmbed);

    }

    if (command === `${prefix}kick`) {


        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

        if(!kickUser) return message.channel.send("User not found");

        var reason = arguments.join(" ").slice(22);

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("srry you cant do this!");

        if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you cant kick this player");

        var kick = new discord.MessageEmbed()
        .setDescription("kick")
        .setColor("#8c6607")
        .addField("Kicked User", kickUser)
        .addField("Kicked By", message.author)
        .addField("reason", reason);

        var kickChannel = message.guild.channel.find("name", "commands");
        if(!kickChannel) return message.guild.send("Cant find the channel!");

        message.guild.member(kickUser).kick(reason);

        kickChannel.send(kick);

        return;
    }

    if (command === `${prefix}ban`) {

        var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

        if(!banUser) return message.channel.send("User not found");

        var reason = arguments.join(" ").slice(22);

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("srry you cant do this!");

        if(banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you cant ban this player");

        var ban = new discord.MessageEmbed()
        .setDescription("ban")
        .setColor("#8c6607")
        .addField("banned User", banUser)
        .addField("banned By", message.author)
        .addField("reason", reason);

        var banChannel = message.guild.channel.find("name", "commands");
        if(!banChannel) return message.guild.send("Cant find the channel!");

        message.guild.member(banUser).ban(reason);

        banChannel.send(ban);

        return;
    }
    
});


bot.login(process.env.token);