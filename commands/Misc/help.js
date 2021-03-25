const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: " Returns bot commands  ",
    aliases: ["h"],
    category: "Misc",
    utilisation: "<prefix>help",

    async run(client, message, args, data) {
        if (!args[0]) {

            const Misc = message.client.commands
                .filter((x) => x.category == "Misc")
                .map((x) => "`" + x.name + "`")
                .join(", ");
            const Fun = message.client.commands
                .filter((x) => x.category == "Fun")
                .map((x) => "`" + x.name + "`")
                .join(", ");


            let help_embed = new Discord.MessageEmbed()
                .setColor("#00FF7A")
                .setDescription(` For more information do : \` ${client.config.bot.PREFIX}help <command_name> \` `)
                .addField("🎊 - Fun ", Fun)
                .addField("📦 - Misc", Misc)
                .setFooter(` Template bot by Kyrokx( " ゴールド開発者 " )#7573 `)


            message.channel.send(help_embed)

        } else {
            const command =
                message.client.commands.get(args.join(" ").toLowerCase()) ||
                message.client.commands.find(
                    (x) => x.aliases && x.aliases.includes(args.join(" ").toLowerCase())
                );

            if (!command)
                return message.channel.send(
                    `❌ - This command does exist ! `
                );

            let embed = new Discord.MessageEmbed()
                .setFooter(` Template bot by Kyrokx( " ゴールド開発者 " )#7573 `)
                .setColor("#00FF7A")
                .addFields(
                    { name: "Name", value: command.name, inline: true },
                    { name: "Description", value: command.description, inline: true },
                    { name: "Aliase(s)", value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                    { name: "Category", value: command.category, inline: true },
                    { name: "Usage", value: command.utilisation.replace('<prefix>', client.config.bot.PREFIX), inline: true },
                )
            

            message.channel.send(embed)
        }


    },
};
