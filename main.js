require("dotenv").config();

const token = process.env.BOT_TOKEN
const { Client, EmbedBuilder, GatewayIntentBits } = require("discord.js");
const serverID = "977250450799726662"

const bot = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

bot.on("ready", () => {
  console.log("Ready Up");
});

bot.on("guildMemberAdd", (member) => {
  const channelID = "1272858378862985278";
  if (member.guild.id !== serverID) return;

  const embed = new EmbedBuilder()
    .setTitle("Member Joined!!")
    .setDescription(`${member.user.displayName} has joined this server`)
    .setColor("Orange")
    .setTimestamp();

  const channel = bot.channels.cache.get(channelID);
  if (channel) {
    channel.send({ embeds: [embed] }).catch(console.error);
  } else {
    console.error("Channel not found");
  }
});

bot.on("guildMemberRemove", (member) => {
  const channelID = "1272858477294915715";
  if (member.guild.id !== serverID) return;

  const embed = new EmbedBuilder()
    .setTitle("Member Left!!")
    .setDescription(`${member.user.displayName} has left from the server`)
    .setColor("Orange")
    .setTimestamp();

  const channel = bot.channels.cache.get(channelID);
  if (channel) {
    channel.send({ embeds: [embed] }).catch(console.error);
  } else {
    console.error("Channel not found");
  }
});

bot.login(token);
