const fs = require('fs');

function readUserInfo(filePath) {
    try {
        const rawData = fs.readFileSync(filePath);
        const userInfo = JSON.parse(rawData);
        return userInfo;
    } catch (error) {
        console.error('Error reading user info:', error);
        return null;
    }
}

const filePath = 'userInfo.json';
const userInfoData = readUserInfo(filePath);

if (userInfoData) {
    console.log('User info read successfully:', userInfoData);
}
