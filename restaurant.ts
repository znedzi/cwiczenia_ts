import { EventEmitter } from 'events';
import { RestaurantEvent, RestaurantEventName, RestaurantTableCountChangeEvent } from './types/restaurant-events';


//klasa powoduje utworzenie nasłuchu na zdarzenia
export class Restaurant extends EventEmitter {
    /**
     * Otwarcie restauracji.
     */
    open() {
        //zastosowaliśmy wywoływanie zdarzeń z dostępnej listy poprzez types/restaurant-events.ts (lista enum)
        (this.emit as RestaurantEvent)(RestaurantEventName.Open);
    }

    /**
     * Zamknięcie restauracji.
     */
    close() {
        (this.emit as RestaurantEvent)(RestaurantEventName.Close);
    }



    //definjujemy nasze długie wyrażenie zastępując je changeTableCount
    //co skróci nasz kod
    private changeTableCount(incDec: number) {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, incDec);
    }     

    /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
    reserveTable() {
        this.changeTableCount( -1);
    }

    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation() {
        this.changeTableCount( 1);
    }

    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation() {
        this.changeTableCount( -1);
    }

    /**
     * Stolik się popsuł, odpadła noga :/
     */
    markTableAsBroken() {

        this.changeTableCount( -1);
    }

    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
    cleanupTable() {
         this.changeTableCount( 1);
    }
}



    