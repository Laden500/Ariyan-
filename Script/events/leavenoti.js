module.exports.run = async function({ api, event, Users }) {
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    if (event.author == event.logMessageData.leftParticipantFbId) return;

    const { createReadStream, existsSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const { threadID } = event;

    const kickedUserID = event.logMessageData.leftParticipantFbId;
    const adminID = event.author;

    const kickedUserName = await Users.getNameUser(kickedUserID) || "অজানা ইউজার";
    const adminName = await Users.getNameUser(adminID) || "অজানা এডমিন";

    const msg = `${kickedUserName}, রিমুভ -(@${adminName} -😀 )
তোর এই গ্রুপে থাকার কোন যোগ্যতা নাই তাই তোকে কিক মারা হলো 😹😹`;

    const gifPath = join(__dirname, "cache", "leaveGif", "randomgif", "kick.gif");
    const formPush = existsSync(gifPath) ? 
        { body: msg, attachment: createReadStream(gifPath) } : 
        { body: msg };

    return api.sendMessage(formPush, threadID);
};
