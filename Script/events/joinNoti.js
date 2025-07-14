module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.5",
    credits: "Laden Shakhe",
    description: "Welcome message with member count, adder, group name, and mentions",
    dependencies: {}
};

module.exports.run = async function({ api, event }) {
    const { threadID, logMessageData, author } = event;

    try {
        const threadInfo = await api.getThreadInfo(threadID);
        const threadName = threadInfo.threadName || "Unnamed Group";
        const totalMembers = threadInfo.participantIDs.length;

        const userInfo = await api.getUserInfo(author);
        const adderName = userInfo[author].name;
        const adderMention = { tag: adderName, id: author };

        let newMembersText = '';
        let mentions = [adderMention];

        for (const participant of logMessageData.addedParticipants) {
            newMembersText += `${participant.fullName}, `;
            mentions.push({ tag: participant.fullName, id: participant.userFbId });
        }
        newMembersText = newMembersText.replace(/,\s*$/, '');

        const message = `🥰 𝙰𝚂𝚂𝙰𝙻𝙰𝙼𝚄 𝙰𝙻𝙰𝙸𝙺𝚄𝙼 @${newMembersText} 👋

🎉 Welcome To Our Group: 『 ${threadName} 』😊

📌 You are now our ${totalMembers}th member in the group!

📌 Added By: @${adderName}

📖 Please follow the group rules:
• !rules — Group Rules
• !help — All Commands`;

        return api.sendMessage({
            body: message,
            mentions: mentions
        }, threadID);

    } catch (err) {
        console.error("Error in joinNoti:", err);
    }
};
