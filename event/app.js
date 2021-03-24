// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();

// Invoke myEmitter.on() method
myEmitter.on('celebration', listenerCallback);

myEmitter.emit('celebration', 'Ali');
