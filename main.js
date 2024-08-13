const token = process.env.token
const { Client, EmbedBuilder, GatewayIntentBits } = require("discord.js");

const bot = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

bot.on("ready", () => {
  console.log("Ready Up");
});

bot.on("guildMemberAdd", (member) => {
  const channelID = "1272778983787855932";
  if (member.guild.id !== "1272778875574685726") return;

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
  const channelID = "1272791105611632651";
  if (member.guild.id !== "1272778875574685726") return;

  const embed = new EmbedBuilder()
    .setTitle("Member Left!!")
    .setDescription(`${member.user.displayName} has left this server`)
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
