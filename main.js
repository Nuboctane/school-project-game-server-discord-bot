const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_MESSAGE_REACTIONS"], partials: ["CHANNEL"] });


client.once('ready', () => {
  console.log("glubo bot online, dm bot to open bots dm's");
  client.user.setPresence('do not disturb');
  client.user.setActivity("testing", {
    type: "STREAMING",
    url: "https://www.twitch.tv/nuboctane"
  });
});

let chance = 0;
let PERFIX = '-';
let responding = false;
let THEY = null;

 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on('message', message => {
  //
  if (message.channel.type == "DM"){ //if its a dm
  }
  if (message.mentions.has(client.user)) {
    if (chance == 0) {
      chance++;
      message.channel.send('what');
    } else if (chance == 1) {
      chance++;
      message.channel.send('what do u want...');
    } else if (chance == 2) {
      chance++;
      message.channel.send('what???');
    } else if (chance == 3) {
      chance++;
      message.channel.send('?');
    } else if (chance == 4) {
      chance = 0;
      message.channel.send('bro?');
    }
  }
});
  client.on('message', message => {
 
    if (!message.content.startsWith(PERFIX) || message.author.bot) return;
 
    const args = message.content.slice(PERFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } 
  
});


client.login("OTEwMDgwNjE0NDEyMjE0MzAz.YZNong.jTP0FVUFAuidoe1uOUTWmXpQenc");