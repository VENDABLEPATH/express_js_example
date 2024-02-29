const path = require('path');

function getMessage(req, res){
    res.render('messages', {
        title: "Messages to friends.",
        name: "Albert",
    });
}

function postMessage(req, res){
    console.log(`updating messages`);
}

module.exports = {
    getMessage,
    postMessage
}