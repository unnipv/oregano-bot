const { prefix } = require("../config.json");

exports.run = (bot, message) => {
    bot.sendImage(message.from, "https://raw.githubusercontent.com/unnipv/whatsapp-utility-bot/main/imageToSticker/media/mannu.jpeg");
};

exports.help = {
    name: "Mannu",
    description: "You are not ready for this",
    usage: `${prefix}mannu`,
    cooldown: 5
};

