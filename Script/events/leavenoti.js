const kickedUserName = await Users.getNameUser(kickedUserID) || "অজানা ইউজার";
const adminName = await Users.getNameUser(adminID) || "অজানা এডমিন";

// কিক খাওয়ার মেসেজ
const msg = `${kickedUserName}, রিমুভ -(@${adminName} -😀 )
তোর এই গ্রুপে থাকার কোন যোগ্যতা নাই তাই তোকে কিক মারা হলো 😹😹`;
