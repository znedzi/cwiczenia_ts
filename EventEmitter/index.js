const { tickTock } = require('./tikTock');

const events = tickTock();

//nasłuchuj takiego zdarzenia
events.on('secondElapsed', data => {
    console.log('Hi', data);
});

