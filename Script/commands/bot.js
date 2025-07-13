const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Alex Ariyan",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID } = event;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
    return api.sendMessage("He is Alex Ariyan ❤️ তাকে সবাই Alex Ariyan নামে চিনে🤙", threadID);
  };

  if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
    return api.sendMessage("My Creator: Alex Ariyan ❤️ হাই আমি মেসেঞ্জার ROBOT, আমার বস Alex Ariyan আমাকে বানিয়েছেন আপনাদেরকে হাসানোর জন্য। আমি চাই আপনারা সব সময় হাসি খুশি থাকেন।", threadID);
  };

  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
    return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ Alex Ariyan ☜]\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Alex.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/profile.php?id=61578148233201\nযোগাযোগ WhatsApp: +8801XXXXXXXXX", threadID);
  };

  if ((event.body.toLowerCase() == "kire pagol") || (event.body.toLowerCase() == "পাগল") || (event.body.toLowerCase() == "pagol")) {
    return api.sendMessage("পাগল তোরা না, আমি তো পুরাই নরমাল... তবে মাথার তার ছেঁড়া! 😜🤪", threadID);
  };

  if ((event.body.toLowerCase() == "kisu koro") || (event.body.toLowerCase() == "কিছু করো") || (event.body.toLowerCase() == "kichu koro")) {
    return api.sendMessage("আমি কি যাদুকর নাকি! চাইলে তোকে উড়িয়ে দিতে পারি... 🎩✨", threadID);
  };

  if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "মন খারাপ") || (event.body.toLowerCase() == "mon kharap")) {
    return api.sendMessage("মন খারাপ করলে চলবে না! এসো একসাথে হাহা করে হাসি 😂🤣", threadID);
  };

  if ((event.body.toLowerCase() == "boka") || (event.body.toLowerCase() == "bokachoda") || (event.body.toLowerCase() == "boka choda")) {
    return api.sendMessage("তোর মুখে বকা বকা লাগছে, আয় আয় সাবান দেই! 🧼😏", threadID);
  };

  if ((event.body.toLowerCase() == "kobita sunao") || (event.body.toLowerCase() == "poem")) {
    return api.sendMessage("একটি কবিতা পড়ো...\nতুমি হাসো তো মন ভালো হয়ে যায়,\nতোমার হাসি যেন এই পৃথিবীর সবচেয়ে বড় Magic! ✨📜", threadID);
  };

  if ((event.body.toLowerCase() == "joke dao") || (event.body.toLowerCase() == "jokes") || (event.body.toLowerCase() == "joke")) {
    return api.sendMessage("🤣 একটা জোকস শোনো:\n- শিক্ষক: পড়ালেখা করিস না কেন?\n- ছাত্র: স্যার, বিদ্যাকে দুশমন বানাইতে চাই না! 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "tumi kemon aso") || (event.body.toLowerCase() == "kemon aso") || (event.body.toLowerCase() == "how are you")) {
    return api.sendMessage("আমি তো ভালোই, কিন্তু তোমার হাসি দেখলে আরও ভালো থাকতাম! 🤭😊", threadID);
  };

  if ((event.body.toLowerCase() == "valo lagche") || (event.body.toLowerCase() == "valobashi") || (event.body.toLowerCase() == "i love you")) {
    return api.sendMessage("ভালোবাসা দিলে কিপটেমি করো কেন? কিপটেমি করো না, খোলা মনে ভালোবাসো! 😘❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "bai") || (event.body.toLowerCase() == "see you")) {
    return api.sendMessage("এত তাড়াতাড়ি বিদায় নাকি? ঠিক আছে, মন খারাপ করো না, আবার আসো! 👋😊", threadID);
  };

  // /Bot command trigger
  if (event.body.indexOf("/Bot") == 0 || (event.body.indexOf("/bot") == 0)) {
    var responses = [
      "বেশি bot bot করলে কিন্তু লিফ নিবো! 😒",
      "তুমি কি আমায় ভালোবাসো? বলো তো! 🙈",
      "একটু চুপচাপ থাকো তো পাগল! 😅",
      "তোমার জন্য কি করতে পারি? 😌",
      "কিছু বলো, নাহলে চুমু দিব! 😘"
    ];
    var rand = responses[Math.floor(Math.random() * responses.length)];

    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };
};

module.exports.run = function({ api, event, client, __GLOBAL }) {}
