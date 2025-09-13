const config = require("./config.json");

//refs are here https://discordjs.guide/creating-your-bot/main-file.html#running-your-application
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { Events } = require('discord.js');

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(config.token);

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    console.log(`New message in #${message.channel.name}: ${message.content}`);
    if (message.content) {
        message.channel.send(message.content);
    }
    // Reply instead of generic msg
    // if (message.content) {
    //     message.reply(message.content);
    // }
});