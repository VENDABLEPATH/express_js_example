function getMessage(req, res){
    res.send(`<p>Hello albert.</p>`);
}

function postMessage(req, res){
    console.log(`updating messages`);
}

module.exports = {
    getMessage,
    postMessage
}