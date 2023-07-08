//Drugi sposób uruchamiania własnych zdarzeń powiązany z index_obiektowo.js
const {TickTok} = require('./obiekt_events');
const {log} = require('console');

new TickTok()
    .on('secondElapsed', () => { 
        log('Hi.');
        })

    .once('secondElapsed', () => { 
        log('Uruchom tylko jeden raz.');
        })

    .on('fiveSecondElapsed', () => {
            log('Hello.');
        });