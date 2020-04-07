const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const filter = m => m.author.id === message.author.id;
  const questions = ["What is your name?", "What is your age?"];
    async function* generateQuestions(message) {
      for (const question of questions) {
        await message.channel.send(question);

        yield message.channel
          .awaitMessages(filter, { max: 1 })
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
    }
}
module.exports.help = {
  name: "apply-staff"
}