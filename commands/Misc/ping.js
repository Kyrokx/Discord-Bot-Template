const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: " Returns bot latency ",
    aliases: [ "pong", "layency" ],
    category: 'Misc',
    utilisation: '<prefix>ping',

    async run(client, message) {
        message.channel.send(" 👏 OK... ").then(m => {
            embed = new Discord.MessageEmbed().addField(" 🏓 Latency's API  ", client.ws.ping + "ms").setColor("#00FF7A")
            .addField("🤖 | Ping's bot", `${m.createdTimestamp - message.createdTimestamp}ms`)
            m.edit(embed)
        })
    }
};

