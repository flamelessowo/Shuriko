'use strict';
require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const weather = require('./commands/weather.js')

const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ] });
const prefix = "~";


client.on('ready', () => {
  console.log('ready steady go');
})

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)) {
    let args = message.content.split(" ");
    const command = args.shift().replace(prefix, "").toLowerCase();
    switch(command) {
      case 'weather':
        weather(client, message, args);
        return;
      case 'love':
        if (message.author.id === '235047280351248395') message.reply('I love you too Ku ri su!!! <3');
        return;
    }
  }
})

client.login(process.env.BOT_TOKEN);
