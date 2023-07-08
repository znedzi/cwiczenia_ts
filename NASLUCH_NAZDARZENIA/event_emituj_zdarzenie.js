//Z modułu events pobieramy klasę EventEmitter
const {EventEmitter} = require('events');




//Musimy obiekt ee przekazać do pliku index.js w którym jest jakiś kod do wykonania
//Robimy to bardzo prosto na koniec Programu 

function genZdarzenie() {

    //tworzymy obiekt ee (emituj zdarzenie)
    const ee = new EventEmitter();

    setInterval(()=> {

        //jakiś kod do wykonania może być np. console.log('Hi.') lub pusto;
        //na obiekcie ee wywołujemy metodę emit i podajemy nazwę naszego zdarzenia
        //secondElapsed - sekunda która upłynęła
        //zdarzenie 'secondElapsed' po uruchomieniu funkcji będzie generowane co sedundę
        //wysyłamy co sekundę nasze zdarzenie
        //od teraz w głównym pliku naszego programu możemy basłuchiwać na to zdarzenie
        //tak samo jak np. na click, mouseOver itp.
        // po secondElapsed możemy dodatkowo podawać parametry (liczy się ich kolejność, a nie nazwa i parametry te możemy później odbierać.) Parametrem może być dowolna wartość to może być obiekt, jakaś tablica itp.
        ee.emit('secondElapsed', 'Wysyłamy_Parametr_testowy', 'Drugi_parametr');

    },1000);


    setInterval(()=> {

        ee.emit('fiveSecondElapsed', 'Wysyłamy_Parametr_testowy', 'Drugi_parametr');

    },5000);

    //zwracamy nasze obiekty, pierwszy co 1 sekundę, drugi co 5 sekund, aby przekazać go do pliku index.js, w pliku indeks.js odbieramy wysłane zdarzenia. Zdarzenia możemy odebrać w dowolnym pliku.

    return ee;
};


//każdy plik jest modułem w który exportujemy w którym jest pust obiekt, ale my możemy tam coś dodać np. naszą funkcję.
//zastąp pusty obiekt który eksportujemy modułem genZdarzenie
module.exports = {
    genZdarzenie,
};