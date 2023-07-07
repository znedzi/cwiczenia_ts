import { EventEmitter } from 'events';


//klasa powoduje utworzenie nasłuchu na zdarzenia
export class Restaurant extends EventEmitter {
    /**
     * Otwarcie restauracji.
     */
    open() {
        this.emit('open');
    }

    /**
     * Zamknięcie restauracji.
     */
    close() {
        this.emit('close');
    }

    /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
    reserveTable() {
        this.emit('decTable');
    }

    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation() {
        this.emit('incTable');
    }

    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation() {
        this.emit('decTable');
    }

    /**
     * Stolik się popsuł, odpadła noga :/
     */
    markTableAsBroken() {
        this.emit('decTable');
    }

    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
    cleanupTable() {
        this.emit('incTable');
    }
}



    