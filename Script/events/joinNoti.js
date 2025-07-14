module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.3",
    credits: "Laden Shakhe",
    description: "Welcome message mentioning new member, adder, and group name",
    dependencies: {}
};

module.exports.run = async function({ api, event }) {
    const { threadID, logMessageData, author } = event;

    try {
        let newMemberNames = [];
        let mentions = [];

        // নতুন মেম্বারদের নাম ও মেনশন
        for (let participant of logMessageData.addedParticipants) {
            newMemberNames.push(participant.fullName);
            mentions.push({ tag: participant.fullName, id: participant.userFbId });
        }

        // যে অ্যাড করেছে তার ইনফো
        const userInfo = await api.getUserInfo(author);
        const adderName = userInfo[author].name;
        mentions.push({ tag: adderName, id: author });

        // গ্রুপের ইনফো
        const threadInfo = await api.getThreadInfo(threadID);
        const threadName = threadInfo.threadName || "This Group";

        // ফাইনাল মেসেজ
        const message = `🥰 𝙰𝚂𝚂𝙰𝙻𝙰𝙼𝚄𝙰𝙻𝙰𝙸𝙺𝚄𝙼 @${newMemberNames.join(', ')} 👋

𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚃𝚘 𝙾𝚞𝚛 𝙶𝚛𝚘𝚞𝚙: 『 ${threadName} 』😊

• 𝙸 𝙷𝚘𝚙𝚎 𝚈𝚘𝚞 𝚆𝚒𝚕𝚕 𝙵𝚘𝚕𝚕𝚘𝚠 𝙶𝚛𝚘𝚞𝚙 𝚁𝚞𝚕𝚎𝚜
• !rules — 𝙵𝚘𝚛 𝙶𝚛𝚘𝚞𝚙 𝚁𝚞𝚕𝚎𝚜
• !help — 𝙵𝚘𝚛 𝙰𝚕𝚕 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜

🫰 𝙰𝚍𝚍𝚎𝚍 𝙱𝚢: @${adderName}`;

        return api.sendMessage({
            body: message,
            mentions: mentions
        }, threadID);

    } catch (err) {
        console.error(err);
    }
};
