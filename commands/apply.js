const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const filter = m => m.author.id === message.author.id;
  const questions = ["minecraft name:", "real name: (not needed)", "age:", "why do you want to be staff?"];

  if (!args.length) {
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
  }
  else if (args[0] === 'staff') {
    async function* generateQuestions(message) {
      for (const question of questions) {
        let embed = new discord.MessageEmbed()
        .setColor(`#0xFFC300`)
        .setDescription(question)
        await message.channel.send(embed);

        yield message.channel
          .awaitMessages(filter, { max: 1 })
          .then(collected => collected.first() && collected.first().content);
      }
    }

    const generator = generateQuestions(message);
    const answers = [];

    for await (const answer of generator) {
      if (!answer) {
        return;
      }

      answers.push(answer);
    }
    let embed = new discord.MessageEmbed()
    .setColor(`#0xFFC300`)
    .setTitle(`New staff application`)
    .addFields(
      { name: questions[0], value: answers[0] },
      { name: questions[1], value: answers[1] },
      { name: questions[2], value: answers[2] },
      { name: questions[3], value: answers[3] },
      { name: questions[4], value: answers[4] }
    )
  var kanaal = message.guild.channels.cache.find(c => c.name == "application-log");
  kanaal.send(embed);
  }
}
module.exports.help = {
  name: "apply"
}