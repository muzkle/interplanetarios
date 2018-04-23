const Discord = require('discord.js');
var logger = require('winston');
const client = new Discord.Client();
var http = require('http');
var twitch = require("twitch.tv");
var request = require('request');

http.createServer(function(request, response) {
    console.log('request starting for bot');
}).listen(process.env.PORT || 5000);

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

var NotifyChannel;

client.on('ready', function(evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(client.user.username + ' - (' + client.user.id + ')');
    client.user.setActivity('use *comandos');
    NotifyChannel = client.channels.find("name", "spam-comandos");
});

client.on('message', msg => {
    if (msg.content.substring(0, 1) == '*') {

        var args = msg.content.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // comandos
            case 'comandos':
                NotifyChannel.send("Aqui serão listados todos os comandos disponíveis!");
                break;
                // !ping
            case 'ping':
                NotifyChannel.send("Pong!");
                break;
                // Just add any case commands if you want to..
        }
    }
});

// var keepCalling = true;

// if (keepCalling) {
//     setInterval(function() {

//         var options = {
//             url: 'https://api.twitch.tv/helix/streams?user_login=vanhgrog',
//             method: 'GET',
//             headers: {
//                 'Client-ID': 'wj5mjrbotxmh9kq2rjz0zeb95btqlj'
//             }
//         }
//         request(options, function(error, response, body) {
//             var result = JSON.parse(body);

//             if (result.data) {
//                 if (result.data[0].type == 'live') {
//                     NotifyChannel.send('Alô alô moçada, Vanhgrog tá ao vivásso na Twitch https://www.twitch.tv/vanhgrog !');
//                     keepCalling = false;
//                 }
//             }

//         });
//     }, 3000);
// }

//process.env.BOT_TOKEN | 
// NDM3NjM0MDY5NzI4MTk4NjU3.Db46YQ.ATf6OFoYbYMzjILfh7RK5eZxyNY
client.login(process.env.BOT_TOKEN);