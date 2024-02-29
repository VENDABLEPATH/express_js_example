const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messageRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000;


// register middleware
app.use((req, res, next) => {
    const start = Date.now();
    next();
    console.log(`method: ${req.method}, url: ${req.baseUrl}${req.url}, ${Date.now() - start}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));

app.use(express.json());

// root router
app.get('/', (req, res) => {
    res.render('index.hbs', {
        title: "My friends are very clever",
        caption: "Let's go to France!"
    })
});

// friends router
app.use('/friends', friendsRouter);

// router for messages
app.use('/messages', messageRouter);


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
