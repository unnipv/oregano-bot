const { prefix } = require("../config.json");
const fs = require('fs');
var globals = require("../globals.json");

exports.run = (bot, message) => {
    bot.reply(message.from, `Resonance count: ${globals.resonance + 1}`, message.id);
    globals.resonance = globals.resonance + 1;

    fs.writeFileSync("globals.json", JSON.stringify(globals), {flag: "w+"}, function (err) {

            // Checking for errors
            if (err)
                throw err;

            console.log("Done writing"); // Success
        });
};

exports.help = {
    name: "Resonance Counter",
    description: "Update and display the Mugs-Unni resonance count",
    usage: `${prefix}mugsunny`,
    cooldown: 1
};

