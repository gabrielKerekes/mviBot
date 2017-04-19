var restify = require('restify');
var builder = require('botbuilder');
//=========================================================
// Bot Setup
//=========================================================
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});
// Create chat bot
var connector = new builder.ChatConnector({
    appId: "4e336106-a7fe-4ba7-80e8-15b3ded23fe3",
    appPassword: "6gfFq6orD5jVrGBbzCfb0E1",
});

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//=========================================================
// Bots Dialogs
//=========================================================
bot.dialog('/', function (session) {
    session.send("Hello World");
});