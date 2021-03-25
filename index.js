const Discord = require('discord.js');
const client = new Discord.Client();
const {readdirSync} = require('fs')

client.config = require('./config')
client.commands = new Discord.Collection();

const init = async () => {
    client.login(client.config.bot.TOKEN)

    readdirSync('./Commands').forEach(dirs => {
        const commands = readdirSync(`./Commands/${dirs}`).filter(files => files.endsWith('.js'));

        for (const file of commands) {
            const command = require(`./Commands/${dirs}/${file}`);
            console.log(`The command has been loaded : ${file}`);
            client.commands.set(command.name.toLowerCase(), command)
        };
    });

    const evtFiles = readdirSync('./Events');
    for (const file of evtFiles) {
        console.log(`Loading Discord.js event : ${file} `)
        const event = require(`./Events/${file}`)
        client.on(file.split(".")[0], event.bind(null, client))
    }

    console.log("Github : https://github.com/Kyrokx")
}

init()