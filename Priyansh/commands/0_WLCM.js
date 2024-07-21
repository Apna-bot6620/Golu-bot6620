const fs = require("fs");
module.exports.config = {
  name: "wlcm",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("welcome") ||
     react.includes("Welcome") || react.includes("wlcm") || react.includes("WELCOME") ||
react.includes("WELCM") ||
react.includes("WEELCOM")) {
    var msg = {
        body: `😔🙃👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😔", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }