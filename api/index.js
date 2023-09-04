const express = require('express');
const router = express.Router();
const {io} = require('../socket.io');
router.get('/webhook', (req, res)=>{
    io.emit("message",{message:"My Message"});
    return res.send("mobile");
}),
router.post('/webhook', (req, res)=>{
    let data  = req.body
    io.emit("message",{message: data});
    return res.send("post apis");
})
module.exports = router;