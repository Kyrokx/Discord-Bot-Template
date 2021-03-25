module.exports = async (client) =>{
    client.user.setActivity(client.config.activity.DATA, { type: client.config.activity.TYPE })

    console.log(`${client.user.tag} is connected`)
}