const Discord = require('discord.js');
const random = require('random');
const jsonfile = require('jsonfile');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_MESSAGE_REACTIONS"], partials: ["CHANNEL"] });



client.once('ready', () => {
  console.log("glubo bot online");
  client.user.setPresence('do not disturb');
  client.user.setActivity("testing", {
    type: "STREAMING",
    url: "https://www.twitch.tv/nuboctane"
  });
});

let chance = 0;
let PERFIX = '!';
 
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
    if (command === 'verify') {
        client.commands.get('verify').execute(message, args, Discord, client);
        message.delete();
    } 

});


var stats = {}; 
if (fs.existsSync('stats.json')) { 
stats = jsonfile.readFileSync('stats.json');
}

client.on('message', (message) => {
  if (message.author.id == client.user.id)
   return;
if(message.guild.id in stats === false) { 
  stats[message.guild.id] = {}
} 

const guildStats = stats[message.guild.id];
if (message.author.id in guildStats === false) { 
  guildStats[message.author.id] = { 
    xp: 0,
    level: 0,
    last_message: 0
  };
}

const userStats = guildStats[message.author.id];
if (Date.now()-userStats.last_message > 5000) {

userStats.xp += random.int(15, 25); 
userStats.last_message = Date.now();

const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100;
if (userStats.xp >= xpToNextLevel) { 
  userStats.level++;
  userStats.xp = userStats.xp - xpToNextLevel;
  message.channel.send(message.author.username + ' has reached level ' + userStats.level)
}

jsonfile.writeFileSync('stats.json', stats);  


console.log(message.author.username + ' now has ' + userStats.xp);
console.log(xpToNextLevel + 'xp needed for next level');
}
    const parts = message.content.split(' ');

    if(parts[0] === '!hello'){ 
        message.reply('hi');
    }

}); 

