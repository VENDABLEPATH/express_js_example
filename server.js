const express = require('express');

const { getFriend, allFriends, postFriend } = require('./controllers/friends.controller');
const { getMessage, postMessage } = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;


// register middleware
app.use((req, res, next) => {
    const start = Date.now();
    next();
    console.log(`method: ${req.method}, url: ${req.url}, ${Date.now() - start}ms`);
});

app.use(express.json());

// POST request
app.post('/friends', postFriend);
app.get(`/friends`, allFriends);
app.get('/friends/:friendId', getFriend);

app.get(`/messages`, getMessage);
app.post('/messages', postMessage);


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
