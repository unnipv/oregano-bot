const { prefix } = require("../config.json");
const fs = require('fs');
var globals = require("../globals.json");

exports.run = (bot, message) => {
    var gaali_ind = Math.floor(Math.random() * globals.theris.length);
    if (mentions.length != 1) {
        bot.reply(message.from, `${globals.theris[gaali_ind]}`, message.id);
    }
    else{
        bot.sendTextWithMentions(message.from, `@${mentions[0].replace('@c.us', '')} ${globals.theris[gaali_ind]}`);
    }
    
};

exports.help = {
    name: "Theri",
    description: "Make the bot abuse your friends",
    usage: `${prefix}theris <@name>`,
    cooldown: 1
};