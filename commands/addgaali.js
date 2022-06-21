const { prefix } = require("../config.json");
const fs = require('fs');
var globals = require("../globals.json");

exports.run = (bot, message, args) => {
    var gaali = args.join(" ");
    globals.gaalis.push(gaali);
    fs.writeFileSync("globals.json", JSON.stringify(globals), {flag: "w+"}, function (err) {

        // Checking for errors
        if (err)
            throw err;

        console.log("Gaali added"); // Success
    });

    bot.reply(message.from, `Added ${gaali} to database.`, message.id);
    
};

exports.help = {
    name: "Add Gaali",
    description: "Add new gaalis to the database",
    usage: `${prefix}addgaali`,
    cooldown: 1
};