module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "1.0.1",
    credits: "Alex Ariyan | Modified by Laden Shakhe",
    description: "পারমিশন ছাড়া যারা গ্রুপ ছাড়ে, তাদের ফেরত আনা।"
};

module.exports.run = async ({ event, api, Threads, Users }) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (data.antiout == false) return;
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;

    const leftUserId = event.logMessageData.leftParticipantFbId;
    const name = global.data.userName.get(leftUserId) || await Users.getNameUser(leftUserId);
    const isSelfLeave = event.author == leftUserId;

    if (isSelfLeave) {
        api.addUserToGroup(leftUserId, event.threadID, (error) => {
            if (error) {
                api.sendMessage(
                    `❌ ${name} এই বেকুবটারে ফেরত আনা গেল না! 
সম্ভবত বটরে ব্লক করছে অথবা তার অ্যাকাউন্টে গ্রুপ এড বন্ধ!

⚠️ গ্রুপের নিয়ম মেনে চলো, বট ব্লক কইরো না!`,
                    event.threadID
                );
            } else {
                api.sendMessage(
                    `😡 ইস ${name} তোর সাহস তো কম না বস! 
গ্রুপ এডমিনের পারমিশন ছাড়া তুই লিভ নিস? 🤬😾

Creator ➢ Alex Ariyan 😂

📢 সোন, ${name}, এই গ্রুপ হইলো গ্যাং! 
এখান থেকে যেতে চাইলে এডমিনের পারমিশন নিতে হয়!
তুই পারমিশন ছাড়া লিভ নিছোস - তাই তোকে আবার 
মাফিয়া স্টাইলে এড দিলাম! 🔥

🛡️ নিয়ম মানো, শান্তি থাকো!`,
                    event.threadID
                );
            }
        });
    }
};
