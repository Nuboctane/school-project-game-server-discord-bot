
module.exports = {
    name: 'verify',
    description: "verify_role",
    async execute(message, args, Discord, client) {
        const channel_id = '910120387436769300';
        const role = message.guild.roles.cache.find(role => role.name === "members");
        if (message.channel.id == channel_id){
        message.guild.members.cache.get(message.author.id).roles.add(role);
        }
    }
}