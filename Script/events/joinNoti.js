module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "Laden Shakhe",
    description: "Welcome message when someone joins the group",
    dependencies: {}
};

module.exports.run = async function({ api, event }) {
    const { threadID } = event;

    try {
        let mentions = [];
        let nameArray = [];
        for (let participant of event.logMessageData.addedParticipants) {
            nameArray.push(participant.fullName);
            mentions.push({ tag: participant.fullName, id: participant.userFbId });
        }

        const welcomeMessage = `🥰 𝙰𝚂𝚂𝙰𝙻𝙰𝙼𝚄𝙰𝙻𝙰𝙸𝙺𝚄𝙼 @ ${nameArray.join(', ')} 👇

𝙶𝚛𝚘𝚞𝚙😊
• 𝙸 𝙷𝚘𝚙𝚎 𝚈𝚘𝚞 𝚆𝚒𝚕𝚕 𝚏𝚘𝚕𝚕𝚘𝚠 𝙾𝚞𝚛 𝙶𝚛𝚘𝚞𝚙 𝚁𝚞𝚕𝚎𝚜
• !𝚛𝚞𝚕𝚎𝚜 𝚏𝚘𝚛 𝙶𝚛𝚘𝚞𝚙 𝚛𝚞𝚕𝚎𝚜
• !𝚑𝚎𝚕𝚙 𝙵𝚘𝚛 𝚊𝚕𝚕 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜

• 𝚈𝚘𝚞 𝙰𝚛𝚎 𝚃𝚑𝚎 (01)st 𝙼𝚎𝚖𝚋𝚎𝚛 𝚒𝚗 𝙾𝚞𝚛 𝙶𝚛𝚘𝚞𝚙
• 𝙰𝚍𝚍𝚎𝚍 𝙱𝚢:👇
            👇
     𓊈𒆜laden 𒆜𓊉✅`;

        return api.sendMessage({
            body: welcomeMessage,
            mentions: mentions
        }, threadID);

    } catch (err) {
        console.log(err);
    }
};
