# twitter-developers-api

- update config.js with your twitter developer credentials
- use ```npm start``` or ```node index.js``` to run the server.

# hit points
-search by hashtag or text: http://localhost:5004/tweets/search?queryText=america&queryCount=3

-search by id: http://localhost:5004/tweets/getById?id=1360838463877050374 

-post: http://localhost:5004/tweets/post
    body -> raw -> JSON
    {
    "tweetText":"#testing"
    }

# start the server
-`npm run server` or `npm run start` or `node index.js` 