module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.8",
    credits: "Laden Shakhe",
    description: "Welcome with member count, adder, group name and mentions",
    dependencies: {}
};

module.exports.run = async function({ api, event }) {
    try {
        const { threadID, logMessageData, author } = event;

        const threadInfo = await api.getThreadInfo(threadID);
        const threadName = threadInfo.threadName || "Unnamed Group";
        const totalMembers = threadInfo.participantIDs.length;

        const userInfo = await api.getUserInfo(author);
        const adderName = userInfo[author].name;
        const adderMention = { tag: adderName, id: author };

        let newMembersNames = [];
        let mentions = [adderMention];

        for (const participant of logMessageData.addedParticipants) {
            newMembersNames.push(participant.fullName);
            mentions.push({ tag: participant.fullName, id: participant.userFbId });
        }

        const newMembersText = newMembersNames.join(", ");
        const memberNumber = totalMembers;

        const message = `🥰 𝙰𝚂𝚂𝙰𝙻𝙰𝙼𝚄𝙰𝙻𝙰𝙸𝙺𝚄𝙼 @${newMembersText} 

𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚈𝚘𝚞 𝚃𝚘 𝙾𝚞𝚛:
『 ${threadName} 』 Group 😊

• 𝙸 𝙷𝚘𝚙𝚎 𝚈𝚘𝚞 𝚆𝚒𝚕𝚕 𝙵𝚘𝚕𝚕𝚘𝚠 𝙶𝚛𝚘𝚞𝚙 𝚁𝚞𝚕𝚎𝚜
• !rules 𝚏𝚘𝚛 𝙶𝚛𝚘𝚞𝚙 𝚛𝚞𝚕𝚎𝚜
• !help 𝚏𝚘𝚛 𝚊𝚕𝚕 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜

• 𝚈𝚘𝚞 𝙰𝚛𝚎 𝚃𝚑𝚎 (${memberNumber})th 𝙼𝚎𝚖𝚋𝚎𝚛 𝚘𝚏 𝙶𝚛𝚘𝚞𝚙

• 𝙰𝚍𝚍𝚎𝚍 𝙱𝚢: @${adderName}`;

        return api.sendMessage({
            body: message,
            mentions: mentions
        }, threadID);

    } catch (err) {
        console.error("Error in joinNoti:", err);
    }
};
