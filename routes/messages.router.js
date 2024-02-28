const express = require('express');

const { getMessage, postMessage } = require('../controllers/messages.controller');

const messageRouter = express.Router();

messageRouter.use((req, res, next) => {
    console.log(`IP address: ${req.ip}`);
    next();
})

messageRouter.get(`/`, getMessage);
messageRouter.post('/', postMessage);

module.exports = messageRouter;