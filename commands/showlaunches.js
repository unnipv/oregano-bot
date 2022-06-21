const { prefix } = require("../config.json");
const fs = require('fs');
var globals = require("../globals.json");

exports.run = (bot, message) => {
    let twssStr = "List of launch instances: \n";
    for (let i = 0; i < globals.launches.length; i++) {
        twssStr = twssStr + "\n" + (i+1).toString();
        twssStr = twssStr + ". "; 
        twssStr = twssStr + globals.launches[i];
      }
    bot.reply(message.from, `${twssStr}`, message.id);
};

exports.help = {
    name: "Show Launches",
    description: "Display all previous instances of Launches",
    usage: `${prefix}showlaunches`,
    cooldown: 1
};