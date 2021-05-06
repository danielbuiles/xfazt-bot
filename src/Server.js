//instancia de los recursos de discord.js
const Discord = require('discord.js');
const client = new Discord.Client();

//verifica que el bot se inicia
client.on('ready', () => 
{
  console.log(`Bot Iniciado!`);
});

//devuelve mensaje segun el contenido escrito en discord
client.on('message', msg => 
{
  if (msg.content === 'hola') 
  {
    msg.reply('Hello World!');
  }
});

//Token del bot en https://discord.com/developers/applications/
client.login('el Token');