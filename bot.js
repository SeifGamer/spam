const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("700922944188186657")
setInterval(function() {
channel.send(`هلا والله بااسياد مقطع جديد و حلقه جديده و رده فعل جديده و اليوم رح نلعب و كو شبابو معاكم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);