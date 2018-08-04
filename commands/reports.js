// const Discord = require("discord.js");
//
// module.exports.run = async (bot, message, args) => {
//     let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//     if(!rUser) return message.channel.send("I couldn't find the criminal!");
//     let reason = args.join(" ").slice(22);
//
//     //let ricon = message.member.mentions.displayAvatarURL();
//     let reportEmbed = new Discord.RichEmbed()
//     .setDescription("Reports")
//     .setColor("#990000")
//     .setThumbnail()
//     .addField("Reported criminal! I will let you decide what to do with the scum...", `${rUser} with ID: ${rUser.id}`)
//     .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
//     .addField("Channel", message.channel)
//     .addField("Time", message.createdAt)
//     .addField("Reason", reason);
//
//     let reportschannel = message.guild.channels.find(`name`, "reports");
//     if(!reportschannel) return message.channel.send("Couldn't find the report channel, you need to create one so I can send the reports.");
//
//     message.delete().catch(O_o=>{});
//     reportschannel.send(reportEmbed);
// }
//
// module.exports.help = {
//   name: "report"
// }
