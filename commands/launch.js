const { prefix } = require("../config.json");
const fs = require('fs');
var globals = require("../globals.json");

exports.run = (bot, message, args) => {
    switch(args[0]){
        case "add":
            line = message.quotedMsg.body;
            var quote = "";
            var author = message.quotedMsg.sender.name;
            quote = quote + line + " - " + author;
            globals.tempLaunch.push(quote);
            break;
        case "stop":
            var launchString =  "";
            for (let i = globals.tempLaunch.length - 1; i >= 0; i--){
                launchString = launchString + globals.tempLaunch[i] + "\n";
            }
            globals.launches.push(launchString);
            fs.writeFileSync("globals.json", JSON.stringify(globals), {flag: "w+"}, function (err) {
                // Checking for errors
                if (err)
                    throw err;
                console.log("Launch added"); // Success
            });
            bot.reply(message.from, `Added ${globals.launches[globals.launches.length - 1]} to database.`, message.id);
            break;
            
        case "start":
            line = message.quotedMsg.body;
            var quote = "";
            var author = message.quotedMsg.sender.name;
            quote = quote + line + " - " + author;
            globals.tempLaunch = [];
            globals.tempLaunch.push(quote);
            break;
    }
    
    
};

exports.help = {
    name: "Launch",
    description: "Reply to a line that made you launch to add it to the database",
    usage: `${prefix}launch`,
    cooldown: 1
};