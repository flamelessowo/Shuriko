require('dotenv').config();
const axios = require('axios');
const { EmbedBuilder } = require('discord.js');
const weatherApiKey = process.env.WEATHER_API_KEY;

const getWeather = async (client, message, args) => {
  try {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ args[0] }&appid=${ weatherApiKey }`);
    let data = resp.data;
    const embed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Weather in ${ data.name }`)
    .setTimestamp()
    .setThumbnail('https://i.ibb.co/CMrsxdX/weather.png')
    .addFields(
      { name: 'Country', value: `**${ data.sys.country }**`, inline: true },
      { name: 'Description', value: `**${ data.weather[0].description }**` },
      { name: 'Temperature(C)', value: `**${ (data.main.temp - 273.15) >> 0 }°C**` },
      { name: 'Humidity(%)', value: `**${ data.main.humidity }%**` },
      { name: 'Atmospheric Pressure(hPa)', value: `**${ data.main.pressure }hPa**` }
    )
    .setFooter({ text: `Requested by ${message.author.username}` });

    await client.channels.cache.get(message.channelId).send({ embeds: [ embed ] })
  }
  catch {
    message.reply('City not found!');
  }
}

module.exports = getWeather;
