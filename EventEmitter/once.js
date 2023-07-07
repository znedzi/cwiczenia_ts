const { tickTock } = require('./tikTock');

const events = tickTock();

//nasłuchuj takiego zdarzenia
events.once('secondElapsed', data => {
    console.log('Hi', data);
});

events.once('secondElapsed', () => {
    console.log('Tick!');
});