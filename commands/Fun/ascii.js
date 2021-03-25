const Discord = require("discord.js");
figlet = require("figlet"),
    util = require("util"),
    figletAsync = util.promisify(figlet);


module.exports = {
    name: "ascii",
    description: " Returns ascii character   ",
    aliases: [],
    category: "Fun",
    utilisation: "<prefix>ascii",

    async run(client, message, args) {
        const text = args.join(" ");
        if (!text || text.length > 20) {
            return message.channel.send("❌ - Enter a text of less than 20 characters!");
        }

        const rendered = await figletAsync(text);
        message.channel.send("```" + rendered + "```");
    },
};
