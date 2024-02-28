const express = require('express');

const { getFriend, allFriends, postFriend } = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log(`IP address: ${req.ip}`);
    next();
})

friendsRouter.post('/', postFriend);
friendsRouter.get(`/`, allFriends);
friendsRouter.get('/:friendId', getFriend);

module.exports = friendsRouter;