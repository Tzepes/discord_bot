const Discord = require('discord.js');
const botSettings = require('./botsettings.json');
const commando = require('discord.js-commando');
const bot = new Discord.Client();
const prefixes = require('./prefixes.json');
const prefix = prefixes.prefix;
const fs = require("fs");
const tokenFile = require("./token.json");
const reports = require("./commands/reports.js");
bot.commands = new Discord.Collection()
//
// bot.registry.registerGroup('random', 'Random');
// bot.registry.registerDefaults();
// bot.registry.registerCommandsIn(__commands + "/commands");


bot.login('NDYyNjYzOTU2NzcxNzY2Mjcy.DhlaGA.fLpRbc5IK-EvXvlgfsWm8JSTTAA');

bot.on("ready", async () => {
  console.log(`Bot is ready! ${bot.user.username}`);

  try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
  } catch(e) {
    console.log(e.stack);
  }

  bot.user.setActivity("in Development");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;

  let prefix = botSettings.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length))
  if(commandfile) commandfile.run(bot,message,args);

  //REPORTS COMMAND ===============

  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("I couldn't find the criminal!");
    let reason = args.join(" ").slice(22);

    //let ricon = message.member.mentions.displayAvatarURL();
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#990000")
    .setThumbnail()
    .addField("Reported criminal! I will let you decide what to do with the scum...", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find the report channel, you need to create one so I can send the reports.");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

 //IMPALE COMMAND==========================

  if(cmd === `${prefix}impale`){
    // message.mentions.members.displayAvatarURL;
    message.channel.send("Pain it's on it's way...", {
      files: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Empalement.jpg/800px-Empalement.jpg"] // Or replace with FileOptions object
    });
    return;
  }

  // BOT INFO=============================

  if(message.content === `${prefix}voievodinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Voievod information")
    .setColor('#990000')
    .setThumbnail(bicon)
    .addField("Voievod's presentation", "My name is Vlad Dracule,so called " + bot.user.username + ", I come from a distant land called Valahia.");

    return message.channel.send(botembed);
  }
});
