const helpCommands = {
	weather: 'Shows current weather in chosen city.'
}

const getHelp = async (client, message, args) => {
	if (!args[0]) {
		message.reply(Object.entries(helpCommands).map(el => `${el[0]} : ${el[1]}`).join('\n'));
		return;
	}
	if (!helpCommands[args[0]]) {
		message.reply('Such command not found.');
		return;
	}
	message.reply(`${args[0]} : ${helpCommands[args[0]]}`);
}

module.exports = getHelp;
