const { prefix } = require("../config.json");
const fs = require('fs');
var globals = require("../globals.json");

exports.run = (bot, message) => {
    let twssStr = "List of TWSS instances: \n";
    for (let i = 0; i < globals.twss.length; i++) {
        twssStr = twssStr + "\n" + (i+1).toString();
        twssStr = twssStr + ". "; 
        twssStr = twssStr + globals.twss[i];
      }
    bot.reply(message.from, `${twssStr}`, message.id);
};

exports.help = {
    name: "Show TWSS",
    description: "Display all previous instances of TWSS",
    usage: `${prefix}showtwss`,
    cooldown: 1
};