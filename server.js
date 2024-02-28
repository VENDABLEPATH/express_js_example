const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messageRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;


// register middleware
app.use((req, res, next) => {
    const start = Date.now();
    next();
    console.log(`method: ${req.method}, url: ${req.baseUrl}${req.url}, ${Date.now() - start}ms`);
});

app.use(express.json());

// friends router
app.use('/friends', friendsRouter);

// router for messages
app.use('/messages', messageRouter);


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
