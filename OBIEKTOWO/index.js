//Drugi sposób uruchamiania własnych zdarzeń powiązany z index_obiektowo.js
const {TickTok} = require('./obiekt_events');
const {log} = require('console');

new TickTok()
    .on('secondElapsed', odbieram_dodatkowy_parametr => { 
        log('Hi.', odbieram_dodatkowy_parametr);
        })

    .once('secondElapsed', () => { 
        log('Uruchom tylko jeden raz.');
        })

    .on('fiveSecondElapsed', () => {
            log('Hello.');
        });