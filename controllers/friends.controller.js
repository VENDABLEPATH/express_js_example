const friends = require('../models/friends.model');

function postFriend(req, res){
    if (req.body.name){
        const friend = {
            name: req.body.name,
            id: friends.length
        }
        friends.push(friend);
        
        res.json(friend);
    } else {
        return res.status(400).json({ 
            error: "Missing friend name"
        });
    }
}

function allFriends(req, res){
    res.json(friends);
}

function getFriend(req, res){
    const id = Number(req.params.friendId);
    if (id >= friends.length || !friends[id]){
        res.status(404).json({
            error: "Friend does not exist"
        });
    } else {
        res.status(200).json(friends[id]);
    }
}

module.exports = {
    postFriend,
    allFriends,
    getFriend
}