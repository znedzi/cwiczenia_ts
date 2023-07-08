const { log } = require('console');
const {genZdarzenie} = require('./event_emituj_zdarzenie');


//uruchamiamy naszą funkcję generuj zdarzenie
const events = genZdarzenie();

//tutaj nasłuchujemy na zdarzenie secondElapsed jeśli wystąpi uruchamiamy tę funkcję
// events.on('secondElapsed', nasz_parametr => {
//     log('Hi.', nasz_parametr);
// });


// events.on('fiveSecondElapsed', inny_parametr => {
//     log('Hello.', inny_parametr);
// });

//emit - uruchamiamy zdarzenie
//on - reagujemy na zdarzenie (za każdym razem)
//once - reagujemy na zdarzenie, ale tylko jeden raz

//zapis powyższy możemy wykonać również w ten sposób:
events
    .on('secondElapsed', (nasz_parametr) => { 
        log('Hi.', nasz_parametr);
        })

    .on('fiveSecondElapsed', inny_parametr => {
            log('Hello.', inny_parametr);
        });