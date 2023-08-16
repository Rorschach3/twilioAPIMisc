const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Hello from twilio-node',
        to: '+17145742269', // Text your number
        from: '+17149420669', // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));