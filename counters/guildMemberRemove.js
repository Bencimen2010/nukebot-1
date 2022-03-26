const Discord = require('discord.js')
module.exports = async (bot) => {
    bot.on("guildMemberRemove", async guildMember => {
        bot.channels.cache.get("950419941545353277").send(`${guildMember} kilépett a szerveről!`)
    })
}