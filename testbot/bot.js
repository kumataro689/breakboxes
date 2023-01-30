const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

// ベタ書き良くないですが、今回はかんたんな例なのでここに書いていきますね
const TOKEN = "NzA2MDAzMzQ2ODc1NzQ0Mjk3.GL9DvM.6Xc69p7Ja7VoiuwPku_kOjR56j2FJWDeGEy0L0"

client.once('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

// discordにメッセージが送信されると呼ばれる
client.on('messageCreate', message => {
  // botの発言を無視したい
  if (!message.author.bot) {
    // messageに色んな情報やメソッドがあるので後ほど解説
    message.channel.send("おはよう");
  }
}

client.login(TOKEN);

//"NzA2MDAzMzQ2ODc1NzQ0Mjk3.GL9DvM.6Xc69p7Ja7VoiuwPku_kOjR56j2FJWDeGEy0L0"