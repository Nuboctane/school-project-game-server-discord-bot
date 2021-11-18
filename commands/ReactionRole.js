
module.exports = {
    name: 'reactionrole',
    description: "verify_role",
    async execute(message, args, Discord, client) {
        const channel = '910120387436769300';
        const role = message.guild.roles.cache.find(role => role.name === "members");
        const emoji = '✅';
  
        let msg = "just click the god damn checkbox";
  
        let messageEmbed = await message.channel.send(msg);
        messageEmbed.react(emoji);
  
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
  
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role);
                }
            } else {
                return;
            }
  
        });
  
        client.on('messageReactionRemove', async (reaction, user) => {
  
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
  
  
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === role) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                }
            } else {
                return;
            }
        });
    }
  
  }   