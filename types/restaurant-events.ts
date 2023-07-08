export enum RestaurantEventName {
    TableCountUpdate = 'tableCountUpdate',
    Open = 'open',
    Close = 'close',
}
//przy wskazaniu typu RestaurantEvent będziemy mogli wybrać wartość z listy enum
export type RestaurantEvent = (eventName: RestaurantEventName) => boolean;


//wskazujemy jaki typ będzie dostępny po wybraniu RestaurantTableCountChangeEvent
export type RestaurantTableCountChangeEvent = (eventName: RestaurantEventName.TableCountUpdate, incDec: number) => boolean;