const Events = require('./events');
const SocketInitializer = require('socket.io');

module.exports = {
    io:null,
    initialize(server){
        this.io = SocketInitializer(server);
        this.io.on('connection', (socket) => {
            socket.emit('connected', {message: 'a new client connected'});
            Events(socket);
        })
    }
};