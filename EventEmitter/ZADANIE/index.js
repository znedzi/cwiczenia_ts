const { Restaurant } = require("./restaurant");

const megaRestaurant = new Restaurant(); //tworzymy nowy obiekt na bazie naszej klasy
let tablesCount = 25;

megaRestaurant
    .on("open", () => {
        console.log("Otwarto restaurację"); 
        console.log(`W restauracji dostępnych jest ${tablesCount} stolików.`)
    })
    .on('decTable', decTablesCount = () => {
      tablesCount--;
      console.log(`Wzięto stolik. Dostępnych stolików ${tablesCount}.`);
    })
  .on('incTable', incTablesCount = () => {
      tablesCount++;
      console.log(`Zwolniono stolik. Dostępnych stolików ${tablesCount}.`);
    })
  .once("close", () => {
    console.log("Zamknięto restaurację");
  });

//wywołujemy na naszym obiekcie kolejne metody, aby wyemitowały zdarzenie na które nasłuchujemy
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

megaRestaurant.close(); // "Zamknięto restaurację."
