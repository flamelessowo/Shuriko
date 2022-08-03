'use strict';
require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

const prefix = "~";


client.on('ready', () => {
  console.log('ready steady go');
})

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)) {
    const command = message.content.split(" ")[0].replace(prefix, "").toLowerCase();
    switch(command) {
      case 'weather':
        // do something
        return;
      case 'another':
        // do something else
        return;
    }
  }
})

client.login(process.env.BOT_TOKEN);
