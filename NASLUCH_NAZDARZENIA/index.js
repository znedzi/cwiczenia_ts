const { log } = require('console');
const {genZdarzenie} = require('./event_emituj_zdarzenie');


//uruchamiamy naszą funkcję generuj zdarzenie
const events = genZdarzenie();

events.on('secondElapsed', ()=> {
    log('Hi.')
});