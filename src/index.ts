// read env
require('dotenv').config()
const token = process.env.TOKEN;
//imports
import DiscordJS, {Intents } from 'discord.js';


// --- --- --- create discord client
const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
})

// --- --- --- start discord client
client.on('ready', ()=>{
  console.log('bot ready');
});

// --- --- --- on message sent to chet
client.on('messageCreate', (message)=>{
  console.log(message.author.username);
  if(message.content === 'ping'){
    message.reply({content: 'pong'});
  }
});

client.login(token)