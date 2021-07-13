const events = require('events');

const eventEmitter = new events.EventEmitter();

const connectHandler = function connected() {
    console.log('connection succesful');

    eventEmitter.emit('data received');

}

eventEmitter.on('connection' , connectHandler);

eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
});

eventEmitter.emit('connection');

console.log("Program Ended");