const { prefix } = require("../config.json");
const fs = require('fs');
var globals = require("../globals.json");

exports.run = (bot, message) => {
    var line = message.quotedMsg.body;
    var quote = "";
    var author = message.quotedMsg.sender.name;
    quote = quote + line + " - " + author;
    globals.twss.push(quote);
    fs.writeFileSync("globals.json", JSON.stringify(globals), {flag: "w+"}, function (err) {

        // Checking for errors
        if (err)
            throw err;

        console.log("TWSS added"); // Success
    });

    bot.reply(message.from, `Added ${line} to database.`, message.id);
    
};

exports.help = {
    name: "That's What She Said",
    description: "Reply to a twss line to add it to the database",
    usage: `${prefix}twss`,
    cooldown: 1
};