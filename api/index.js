const express = require('express');
const router = express.Router();
const {io} = require('../socket.io');
router.get('/webhook', (req, res)=>{
    io.emit("message",{message:"My Message"});
    return res.send("mobile");
})
module.exports = router;