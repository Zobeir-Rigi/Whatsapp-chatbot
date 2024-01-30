const fs = require('fs');
const twilio = require('twilio');

// Twilio credentials
const accountSid = 'ACf720f5e52dd5484daea68e3e47353f88';
const authToken = '7b589d15f8641b6f0f9266d528f5c33d';
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
function sendWhatsAppMessage(user) {
    const messageBody = `Hello, ${user.name} from ${user.country}`;
    client.messages
    .create({
        body: messageBody,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:${user.celphone}`
    })
    .then(message => console.log(`Message sent to ${user.name} from ${user.country}. Message SID: ${message.sid}`))
    .catch(error => console.error('Error sending message:', error));
}

const filePath = 'userInfo.json';
const userInfoData = readUserInfo(filePath);

if (userInfoData && userInfoData.length > 0) {
    console.log('User info read successfully:', userInfoData);
    sendWhatsAppMessage(userInfoData[0]);  
} else {
    console.error('No user data found in the JSON file.');
}