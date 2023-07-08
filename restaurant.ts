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

    /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
    reserveTable() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, -1);
    }

    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, 1);
    }

    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, -1);
    }

    /**
     * Stolik się popsuł, odpadła noga :/
     */
    markTableAsBroken() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, -1);
    }

    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
    cleanupTable() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, 1);
    }
}



    