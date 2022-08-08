'use strict';
require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const weather = require('./commands/weather.js');
const help = require('./commands/help.js');

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
				break;
			case 'help':
				help(client, message, args);
				break;
		}
	}
})

client.login(process.env.BOT_TOKEN);
