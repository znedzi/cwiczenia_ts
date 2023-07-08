import { Restaurant } from "./restaurant";

const megaRestaurant = new Restaurant(); //tworzymy nowy obiekt na bazie naszej klasy

//początkowa liczba stolików
let tablesCount = 25;

megaRestaurant
   //.once (ang. raz) oznacza, że zdarzenie chcemy obsłuzyć tylko jeden raz
   //.on (ang. na) obsługa wielokrotna zdarzenia (nasłuchuj na)
    .once("open", () => {
        console.log("Otwarto restaurację"); 
        console.log(`W restauracji dostępnych jest ${tablesCount} stolików.`)
    })
    //.once (ang. raz) oznacza, że zdarzenie chcemy obsłuzyć tylko jeden raz
   //.on (ang. na) obsługa wielokrotna zdarzenia (nasłuchuj na)
   .once("close", () => {
    console.log("Zamknięto restaurację");
    })
    //nasłuchujemy zdarzenia tableCountUpdate z dodatkowym parametrem change
    .on('tableCountUpdate', change => {
      if(change === -1) {
        tablesCount += change;
        console.log(`Wzięto stolik. Dostępnych stolików ${tablesCount}.`);
      } else {
        tablesCount += change;
        console.log(`Zwolniono stolik. Dostępnych stolików ${tablesCount}.`);
      }    
    });
  

//wywołujemy na naszym obiekcie kolejne metody, aby wyemitowały zdarzenie na które nasłuchujemy
megaRestaurant.open();
//drugie wywołanie zdarzenia nie powoduje reakcji, bo .once działa tylko jeden raz (restauracja nie może być dwa razy otwarta)
megaRestaurant.open();

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."
megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."
megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 20."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 19."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 20."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 21."

megaRestaurant.close(); // "Zamknięto restaurację."
