const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Albert Einstein"
    },
    {
        id: 1,
        name: "Sir Isaac Newton"
    }
];

app.get(`/friends`, (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const id = Number(req.params.friendId);
    if (id >= friends.length || !friends[id]){
        res.status(404).json({
            error: "Friend does not exist"
        });
    } else {
        res.status(200).json(friends[id]);
    }
})

app.get(`/messages`, (req, res) => {
    res.send(`<p>Hello albert.</p>`);
});

app.post('/messages', (req, res) => {
    console.log(`updating messages`);
});


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});