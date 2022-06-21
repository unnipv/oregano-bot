const { prefix } = require("../config.json");
const fs = require('fs');
var globals = require("../globals.json");

exports.run = (bot, message) => {
    var gaali_ind = Math.floor(Math.random() * globals.gaalis.length);
    if (mentions.length != 1) {
        bot.reply(message.from, `${globals.gaalis[gaali_ind]}`, message.id);
    }
    else{
        bot.sendTextWithMentions(message.from, `@${mentions[0].replace('@c.us', '')} ${globals.gaalis[gaali_ind]}`);
    }
    
};

exports.help = {
    name: "Gaali",
    description: "Make the bot abuse your friends",
    usage: `${prefix}gaali`,
    cooldown: 1
};