'use strict';
require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

const prefix = "~";


client.on('ready', () => {
  console.log('ready steady go');
})

client.login(process.env.BOT_TOKEN);
