var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.addListener("register", (err, data) =>{

     
    console.log("successfully register "+ events.EventEmitter.listenerCount(eventEmitter, "register")+" student to", data);
 
});
  
//eventEmitter.emit("register", "student.txt");


module.exports = eventEmitter