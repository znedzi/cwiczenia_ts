const { EventEmitter } = require('events');

function tickTock () {

    const ee = new EventEmitter();

    setInterval( () => {
        //emitujemy sami takie zdarzenie co sekundę
        ee.emit('secondElapsed', 'Test');
    }, 2000);

    return ee;
}

module.exports = {
    tickTock,
};