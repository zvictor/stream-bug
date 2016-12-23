const stream = require('getstream');

const API_KEY = 'XXXX';
const API_KEY_SECRET = 'XXXX';
const APP_ID = 'XXXX';
const FEED = 'XXXX';
const PK = 'XXXX';

let client;

if (Meteor.isServer) {
  client = stream.connect(API_KEY, API_KEY_SECRET, APP_ID, { location: 'eu-west' });

  Meteor.methods({
    token() {
      return client.feed(FEED, PK).getReadOnlyToken();
    },
  });
}

if (Meteor.isClient) {
  client = stream.connect(API_KEY);

  Meteor.startup(() => {
    Meteor.call('token', (error, token) => {
      const feed = client.feed(FEED, PK, token);

      feed.get({limit:5, offset:0}).catch((response) => {
        console.log(response);
        debugger;
      });
    });
  })
}
