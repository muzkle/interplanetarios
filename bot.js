const Discord = require('discord.js');
var logger = require('winston');
const client = new Discord.Client();
var http = require('http');

http.createServer(function(request, response) {
    console.log('request starting for bot');
}).listen(process.env.PORT || 5000);

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

client.on('ready', function(evt) {
    console.log('running');
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(client.username + ' - (' + client.id + ')');
});

client.on('message', msg => {
    if (msg.content.substring(0, 1) == '*') {

        var args = msg.content.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // comandos
            case 'comandos':
                msg.reply('Aqui serão listados todos os comandos disponíveis!');
                break;
                // !ping
            case 'ping':
                msg.reply('Pong!');
                break;
                // Just add any case commands if you want to..
        }
    }
});

client.login(process.env.BOT_TOKEN);
client.user.setGame('use *comandos')