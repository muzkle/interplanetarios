const Discord = require('discord.js');
var logger = require('winston');
const client = new Discord.Client();
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
                // !ping
            case 'ping':
                msg.reply('Pong!');
                break;
                // Just add any case commands if you want to..
        }
    }
});

client.login('NDM3NjM0MDY5NzI4MTk4NjU3.Db46YQ.ATf6OFoYbYMzjILfh7RK5eZxyNY');