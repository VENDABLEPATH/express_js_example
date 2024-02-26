const express = require('express');

const app = express();

const PORT = 3000;

app.get(`/`, (req, res) => {
    res.send(`Page loaded.`);
});

app.get(`/messages`, (req, res) => {
    res.send(`<p>Hello albert.</p>`);
});

app.post('/messages', (req, res) => {
    console.log(`updating messages`);
});


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});