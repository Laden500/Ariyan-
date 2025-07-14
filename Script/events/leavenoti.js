module.exports.config = {
    name: "leave",
    eventType: ["log:unsubscribe"],
    version: "1.0.7",
    credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️ | Modified by Laden Shakhe",
    description: "Notify when a member is removed by an admin, with gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": ""
    }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const path = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });
};

module.exports.run = async function({ api, event, Users, Threads }) {
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;

    if (event.author == event.logMessageData.leftParticipantFbId) return;

    const { createReadStream, existsSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Dhaka").format("DD/MM/YYYY || HH:mm:ss");

    const kickedUserName = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const adminName = global.data.userName.get(event.author) || await Users.getNameUser(event.author);

    const msg = `╭━━━━━━━━━━━━━━━╮
😡 ইস ${kickedUserName}, তোমার এই গ্রুপে থাকার কোনো যোগ্যতা নেই ছাগল!
তাই তোমাকে 👞 লাথি মেরে গ্রুপ থেকে বের করে দেওয়া হলো 🤪
╰━━━━━━━━━━━━━━━╯

👮 কিক দিয়েছেন: ${adminName}
🕰️ সময়: ${time}`;

    const gifPath = join(__dirname, "cache", "leaveGif", "randomgif", "kick.gif");

    const formPush = existsSync(gifPath) ? 
        { body: msg, attachment: createReadStream(gifPath) } : 
        { body: msg };

    return api.sendMessage(formPush, threadID);
};
