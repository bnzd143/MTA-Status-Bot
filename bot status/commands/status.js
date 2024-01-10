const Discord = require("discord.js"); // by : zef
const Gamedig = require("gamedig"); // by : zef

module.exports = {
  name: "status", // by : zef
  run(client, message, args) {
    Gamedig.query({
	type: "mtasa", // by : zef
      host: "45.146.253.59, // عنوان الخادم حطه هنا
      port: "22141", // بورت الخادم حطه هنا
    })
      .then((state) => {
        if (state["raw"]["numplayers"] === 0) {
          let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(state["name"])
            .addField("Status:", "Online", true)
            .addField(
              "Players:",
              state["raw"]["numplayers"] + "/" + state["maxplayers"],
              true
            )
          message.channel.send({ embed });
        } else {
          let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(state["name"])
            .addField("Status", "Online", true)
            .addField(
              "Players",
              state["raw"]["numplayers"] + "/" + state["maxplayers"],
              true
            )
          message.channel.send({ embed });
        }
      })
      .catch((error) => {
        let embed = new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle(state["name"])
          .addField("Status:", "Offline")
		  .addField(
              "Players",
              state["raw"]["numplayers"] + "/" + state["maxplayers"],
              true
            )
        message.channel.send({ embed });
      });
  },
};
