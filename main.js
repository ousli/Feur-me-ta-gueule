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
    if (message.content.match(/q+u+o+i+\b/gi)) {
        message.reply('-feur')
    }
    if (message.content.endsWith('non')) {
        message.reply('-bril')
    }
    if (message.content.endsWith('oui')) {
        message.reply('-fi')
    }
})

client.login(TOKEN);