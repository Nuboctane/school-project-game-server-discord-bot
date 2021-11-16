const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL"] });

const PREFIX = '.';

client.once('ready', () => {
  console.log("glubo bot online, dm bot to open bots dm's");
  client.user.setPresence('do not disturb');
  client.user.setActivity("testing", {
    type: "STREAMING",
    url: "https://www.twitch.tv/nuboctane"
  });
});




let chance = 0;
let chance2 = 0;
let responding = false;
let THEY = null;
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


