const {EventEmitter} = require('events');


//nasza klasa TikTok jest rozszerzeniem klasy EventEmiter
//oznacza to, że mamy dostęp do metod i właściwości klasy z której dziedziczymy

class TickTok extends EventEmitter {

   constructor() {
    super();
    
    setInterval(()=> {
        //this zawiera wszystkie te same metody co klasa EventEmiter, bo to jej rozszerzenie
        this.emit('secondElapsed', 'wysyłam_dodatkowy_parametr');
    }, 1000);

    setInterval(()=> {
        this.emit('fiveSecondElapsed');
    }, 5000);
   }
};

module.exports = {
    TickTok,
};


