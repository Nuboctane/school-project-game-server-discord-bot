const Discord = require('discord.js');
const random = require('random');
const jsonfile = require('jsonfile');
const { MessageEmbed } = require('discord.js');
const ROLE_5 = '913000311407394866';
const ROLE_10 = '913000462880477244';
const ROLE_15 = '913000561534701579';
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


client.on('message', message => {
  if (message.content == '!roledumb') {
    console.log(message.guild.roles);
  }
  //
  if (message.channel.type == "DM") { //if its a dm
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

let q = 1;
let game = "a";
let time = "a";
let players = "a";
let note = "a";
const schedule_channel_id = 911217051111161874;
let old_message = null;

client.on('message', message => {
  if (message.content.toLowerCase() == "-embed") {
    let embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('embed  title')
      .setAuthor('text', null, null)
      .addField('text', time, true)
      .addField('text', players, true)
      .setFooter('text ' + note, null)
    message.channel.send({ embeds: [embed] });
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() == "a74_role_drop") {
    message.delete();
    // message.channel.send("use + perfix to add the chosen topic as a role to your profile, or use - with the chosen topic to remove one")
    // message.channel.send("example to give your self a role: +destiny")
    // message.channel.send("example to remove a role of yourself: -destiny")
    // message.channel.send("same can be done with platforms")
    // let embed2 = new MessageEmbed()
    // .setColor('#0099ff')
    // .setAuthor('AVAIBLE PLATFORMS')
    // .setTitle('ps1, ps2, ps3, ps4, ps5, ps-vita, PC, XBOX, NintentoSwitch, nintendoDS, nintendo3DS', null, null)
    // message.channel.send({ embeds: [embed2] });
    let embed3 = new MessageEmbed()
      .setColor('#0099ff')
      .setAuthor('AVAIBLE GAMES')
      .setTitle('HALO, Destiny, CallOfDuty, CSGO, Fortnite, GenshinImpact, Pokemon, PUBG, TABG, TABS, ROBLOX, BattleField, ForzaHorizon, Rainbow6, RedDeadRedemption, GTA,', null, null)
      .setFooter('each game also includes all its subcategories and sequels (destiny would also mean destiny 2 etc) if games are missign they will likely be added soon', null)

    message.channel.send({ embeds: [embed3] });
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() == "person below me is gay") {
    message.reply('https://cdn.discordapp.com/attachments/910099385424175134/913342013599002664/mmhmm.png')
  }
});

client.on('message', message => {
  if (message.content.startsWith("+")) {
    message.react('🤔');
    let role = message.guild.roles.cache.find(role => role.name == message.content.substring(1).toLowerCase());
    console.log(role.color);
    if (role && role.color == '0') {
      console.log("case1");
      message.reactions.removeAll();
      message.react('✅');
      message.guild.members.cache.get(message.author.id).roles.add(role);
    } else {
      console.log("case2");
      message.reactions.removeAll();
      message.react('❓');
    }
  }
  if (message.content.startsWith("-")) {
    message.react('🤔');
    let role = message.guild.roles.cache.find(role => role.name == message.content.substring(1).toLowerCase());
    if (role && role.color == '0') {
      console.log("case1");
      message.reactions.removeAll();
      message.react('✅');
      message.guild.members.cache.get(message.author.id).roles.remove(role);
    } else {
      console.log("case2");
      message.reactions.removeAll();
      message.react('❓');
    }
  }
  if (message.content == ("!roles")) {
    message.channel.send('avaible roles: https://cdn.discordapp.com/attachments/648146265649053696/913721282078605382/unknown.png');
  }
});



client.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() == "-schedule" && message.channel.id == schedule_channel_id && q == 1) {
    old_message = message;
    message.channel.send('what game?');
    q++;
  }
  if (q == 2 && message.channel.id == schedule_channel_id && message != old_message) {
    game = message.content;
    old_message = message;

    message.channel.send('what time?');
    q++;

  }
  if (q == 3 && message.channel.id == schedule_channel_id && message != old_message) {
    time = message.content;
    old_message = message;

    message.channel.send('who do you want to invite?');
    q++;


  }
  if (q == 4 && message.channel.id == schedule_channel_id && message != old_message) {
    players = message.content;
    old_message = message;

    message.channel.send('description?');
    q++;

  }
  if (q == 5 && message.channel.id == schedule_channel_id && message != old_message) {
    note = message.content;
    old_message = message;

    let embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('game: ' + game)
      .setAuthor('game event host by: ' + message.author.username, null, null)
      .addField('time', time, true)
      .addField('players', players, true)
      .setFooter('description ' + note, null)
    message.guild.channels.cache.find(channel => channel.id == '911180133019287552').send({ embeds: [embed] });

    q = 1;
    game = "a";
    time = "a";
    players = "a";
    note = "a";
    old_message = null;

  }
});




var stats = {};
if (fs.existsSync('./data/stats.json')) {
  stats = jsonfile.readFileSync('./data/stats.json');
}

client.on('message', (message) => {
  if (message.author.id == client.user.id)
    return;
  if (message.guild.id in stats === false) {
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
  if (Date.now() - userStats.last_message > 5000) {

    userStats.xp += random.int(15, 25);
    userStats.last_message = Date.now();

    const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100;
    if (userStats.xp >= xpToNextLevel) {
      userStats.level++;
      if (userStats.level >= 5) {
        message.guild.members.cache.get(message.author.id).roles.add(ROLE_5);
      }
      else if (userStats.level >= 10) {
        message.guild.members.cache.get(message.author.id).roles.add(ROLE_10);
      }
      else if (userStats.level >= 15) {
        message.guild.members.cache.get(message.author.id).roles.add(ROLE_15);
      }
      userStats.xp = userStats.xp - xpToNextLevel;
      message.channel.send(message.author.username + ' has reached level ' + userStats.level)
    }

    jsonfile.writeFileSync('./data/stats.json', stats);


    console.log(message.author.username + ' now has ' + userStats.xp);
    console.log(xpToNextLevel + 'xp needed for next level');
  }
  const parts = message.content.split(' ');

  if (parts[0] === '!hello') {
    message.reply('hi');
  }

});

client.login("OTEwMDgwNjE0NDEyMjE0MzAz.YZNong.5iN1RufOyf0Elbl1Z2cbNPV1iOs");