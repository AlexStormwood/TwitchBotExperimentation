const tmi = require('tmi.js');
const { flipCoin, flipCoinRepeatedly } = require('./coinFlip');

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true
    },
    identity: {
        // Replace with the username of the account you want to act as, eg "BigfootDSBot"
        username: 'Twitch bot account username here', 
        // In your web browser, make sure you're logged in to the account you want to act as & then
        // visit this link to generate your oauth password. https://twitchapps.com/tmi/
        // Enter the oauth password below.
        password: 'oauth:encyrpted password, replace this whole string with what the auth site gives you'  
    },
    channels: ['channel name that you want this bot to run on']
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action('channel to target', 'Hello, the BigfootDS Bot is ready!');
});

client.on('chat', (channel, user, message, self) => {
    // User: !coinflip
    if (message === '!coinflip') {
        client.action('channel to target', `Coin flip resulted in ${flipCoin()}`);
    }

    // User: !coinflip:9999999999
    if ((/(coinflip[:][0-9]*)/).test(message)){
        let num = message.split(":")[1];
        client.action('channel to target', `Coin flip resulted in ${flipCoinRepeatedly(num)}`);
    }
});

// To run locally, use "node index.js" from a terminal window active in the "src" folder
// or use "node src/index.js" if the terminal is in the project root folder