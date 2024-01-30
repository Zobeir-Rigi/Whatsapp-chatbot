const fs = require('fs');
const twilio = require('twilio');

// Twilio credentials
const accountSid = 'ACf720f5e52dd5484daea68e3e47353f88';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);


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
