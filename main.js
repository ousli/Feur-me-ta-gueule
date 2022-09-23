const Discord = require('discord.js');
const { TOKEN } = require('./config.js');

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.Guilds
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.login(TOKEN)