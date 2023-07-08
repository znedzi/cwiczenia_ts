const {EventEmitter} = require('events');


//nasza klasa TikTok jest rozszerzeniem klasy EventEmiter

class TickTok extends EventEmitter {

   constructor() {
    super();
    
    setInterval(()=> {
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


