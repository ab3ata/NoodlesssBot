const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const filter = m => m.author.id === message.author.id;
    message.channel.send({
        embed: {
            color: 0xFFC300,
            description: "minecraft name:"
        }
            .catch(collected => {
                message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
            })
    });
    message.channel.awaitMessages(filter, { max: 1 }).then(collected => {
        message.channel.send({
            embed: {
                color: 0xFFC300,
                description: "real name: (not needed)"
            }
                .catch(collected => {
                    message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                })
        });
        message.channel.awaitMessages(filter, { max: 1 }).then(collected2 => {
            message.channel.send({
                embed: {
                    color: 0xFFC300,
                    description: "age:"
                }
                    .catch(collected2 => {
                        message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                    })
            });
            message.channel.awaitMessages(filter, { max: 1 }).then(collected3 => {
                message.channel.send({
                    embed: {
                        color: 0xFFC300,
                        description: "why do you want to be staff?"
                    }
                        .catch(collected3 => {
                            message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                        })
                });
                message.channel.awaitMessages(filter, { max: 1 }).then(collected4 => {
                    message.channel.send({
                        embed: {
                            color: 0xFFC300,
                            description: "have you ever been staff before?"
                        }
                            .catch(collected4 => {
                                message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                            })
                    });
                    message.channel.awaitMessages(filter, { max: 1 }).then(collected5 => {
                        message.channel.send({
                            embed: {
                                color: 0xFFC300,
                                description: "howlong have you been playing on the server?"
                            }
                                .catch(collected5 => {
                                    message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                                })
                        });
                        message.channel.awaitMessages(filter, { max: 1 }).then(collected6 => {
                            message.channel.send({
                                embed: {
                                    color: 0xFFC300,
                                    description: "Have you ever been banned?"
                                }
                                    .catch(collected6 => {
                                        message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                                    })
                            });
                            message.channel.awaitMessages(filter, { max: 1 }).then(collected7 => {
                                message.channel.send({
                                    embed: {
                                        color: 0xFFC300,
                                        description: "if you would see anyone hacking what would you do? ban them permanent | ban them temp | just warn him and tell him to stop"
                                    }
                                        .catch(collected7 => {
                                            message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                                        })
                                });
                                message.channel.awaitMessages(filter, { max: 1 }).then(collected8 => {
                                    message.channel.send({
                                        embed: {
                                            color: 0xFFC300,
                                            description: "if you would see your friend hacking what would you do? ban them permanent | ban them temp | just warn him and tell him to stop"
                                        }
                                            .catch(collected8 => {
                                                message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                                            })
                                    });
                                    message.channel.awaitMessages(filter, { max: 1 }).then(collected9 => {
                                        message.channel.send({
                                            embed: {
                                                color: 0xFFC300,
                                                description: "Thank you for applying!"
                                            }
                                                .catch(collected9 => {
                                                    message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                                                })
                                            })
                                            
                                        
                                       
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                            message.channel.bulkDelete(19, true).catch(err => {
                                                console.error(err);
                                                message.channel.send('there was an error trying to prune messages in this channel!');
                                            })
                                            let username = collected.first().content
                                            let username2 = collected2.first().content
                                            let username3 = collected3.first().content
                                            let username4 = collected4.first().content
                                            let username5 = collected5.first().content
                                            let username6 = collected6.first().content
                                            let username7 = collected7.first().content
                                            let username8 = collected8.first().content
                                            let username9 = collected9.first().content
                                            const applications = new discord.MessageEmbed()
                                                .setColor('0xFFC300')
                                                .setTitle('New staff application!')
                                                .addFields(
                                                    { name: 'minecraft name:', value: username },
                                                    { name: 'real name: (not needed)', value: username2 },
                                                    { name: 'age:', value: username3 },
                                                    { name: 'why do you wanna be staff?', value: username4 },
                                                    { name: 'have you ever been staff before?', value: username5 },
                                                    { name: 'Have you ever been banned?', value: username6 },
                                                    { name: 'howlong have you been playing on the server?', value: username7 },
                                                    { name: 'if you would see anyone hacking what would you do? ban them permanent | ban them temp | just warn him and tell him to stop', value: username8 },
                                                    { name: 'if you would see your friend hacking what would you do? ban them permanent | ban them temp | just warn him and tell him to stop', value: username9 }
                                                )
                                                .setFooter("You can vote by clicking the thumbs up or down also leave a comment why you voted this!")
                                            var kanaal = message.guild.channels.cache.find(c => c.name == "application-log");
                                            kanaal.send(applications);
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
        let embed = new discord.MessageEmbed()
            .setTitle('vote!');

        message.channel.send(embed).then(msg => {
            msg.react(`👎`)
            msg.awaitReactions(`👎`)
                .catch(collected => {
                    message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                });
        })
    }
module.exports.help = {
            name: "staffapply"
        }