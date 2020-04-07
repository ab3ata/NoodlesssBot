const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const filter = m => m.author.id === message.author.id;
  const questions = ["What is your name?", "What is your age?"];
  if (!args.length) {
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
  }
  else if (args[0] === 'staff') {
    async function* generateQuestions(message) {
      for (const question of questions) {
        await message.channel.send(question);

        yield message.channel
          .awaitMessages(filter, { max: 1, time: 1000 })
          .then(collected => collected.first() && collected.first().content);

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
        .setColor('0xFFC300')
        .setTitle('New staff application!')
        .addFields(
          { name: questions[0], value: answers[0] },
          { name: questions[2], value: answers[1] }
        )
      var kanaal = message.guild.channels.cache.find(c => c.name == "application-log");
      kanaal.send(applications);
    }
    message.channel.send(`First argument: ${args[0]}`);
  }
}
module.exports.help = {
  name: "apply"
}