const Discord = require('discord.js');
const { TOKEN } = require('./config.js');

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.MessageContent
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('messageCreate', message => {
    if (message.content.endsWith('quoi')) {
        message.reply('-feur')
    }
})

client.login(TOKEN);