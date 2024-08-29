var EventEmitter = require('events');
var sec = 1;

//EventEmitter 객체를 상속한 후 재정의하는 방법.
exports.timer = new EventEmitter();

setInterval(function(){
    exports.timer.emit('tick');
}, sec * 1000);
