const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
     client.user.setGame("RoyaleGames","http://twitch.tv/HP");
});

client.on('guildMemberAdd', async member => {
if(member.guild.id === "438261593894289418") {
member.guild.channels.find(r => r.name === 'hub').send("Welcome**2,RoyaleGames** Server.");
}
});
    
     client.login(process.env.BOT_TOKEN); 
