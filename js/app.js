// # Calcolo del prezzo del biglietto del treno

// - Creare DOM element per ogni tipo di input

const inputNameDOMElement = document.getElementById("passengerName");
const inputSurnameDOMElement = document.getElementById("passengerSurname");
const inputDistanceTripDOMElement = document.getElementById("distanceTrip");
const inputDiscountSelectDOMElement = document.getElementById("discount");
const btnDOMElement = document.getElementById('btn')

// - Recupero dei dai tramite il button e il calcolo del prezzo del viaggio
//     - Creazione delle variabile con i dati fissi
//          - Creare la variabile "PRICE_KM" con valore 0.21 (valore euro per km)
//          - Creare la variabile "DISCOUNT_UNDER_18" 20% in decimali
//          - Creare la variabile "DISCOUNT_OVER_65" 40% in diecimali
//          - Creare la variabile "DISCOUNT_NOT" 0% in decimal
const PRICE_KM = 0.21;
const DISCOUNT_UNDER_18 = 0.2;
const DISCOUNT_OVER_65 = 0.4;
const DISCOUNT_NOT = 0;
//     - Creazione del evento onclick
btnDOMElement.addEventListener("click", function() {
    //         - Recupero il nome dal input
    //             - recupero il valore presente nell'input e lo salvo in una variabile passengerName
    const passengerName = inputNameDOMElement.value.trim();
    console.log("Nome del passegero:" + " " + passengerName, typeof passengerName);
    //         - Recupero il Surname dal input
    //             - recupero il valore presente nell'input e lo salvo in una variabile passengerSurname
    const passengerSurname = inputSurnameDOMElement.value.trim();
    console.log("Cognome del passegero:" + " " + passengerSurname, typeof passengerSurname);
    //         - Recupero il distanza dal input
    //             - recupero il valore presente nell'input e lo salvo in una variabile distanceTrip
    const distanceTrip = Number(parseFloat(inputDistanceTripDOMElement.value.replace(/,/g, ".").replace(/\s/g, '')).toFixed(2))
    console.log("Distanza del viaggio:" + " " + distanceTrip, typeof distanceTrip);
    //         - Recupero la tipologia dello sconto input
    //             - recupero il valore presente nell'input e lo salvo in una variabile "passengerDiscountEntity"
    //             -  SE (inputDiscountSelectDOMElement.value == 0) 
    //                 - passengerDiscountEntity = DISCOUNT_UNDER_18
    //             ALTRIMENTI SE (inputDiscountSelectDOMElement.value == 1) 
    //                 - passengerDiscountEntity = DISCOUNT_OVER_65
    //             ALTRIMENTI () 
    //                 - passengerDiscountEntity = DISCOUNT_NOT
    if (inputDiscountSelectDOMElement.value == 0) {
        var passengerDiscountEntity = DISCOUNT_UNDER_18
        console.log("Percentuale di sconto è " + DISCOUNT_UNDER_18 * 100 + "%", typeof passengerDiscountEntity);
    } else if (inputDiscountSelectDOMElement.value == 2) {
        var passengerDiscountEntity = DISCOUNT_OVER_65
        console.log("Percentuale di sconto è " + DISCOUNT_OVER_65 * 100 + "%", typeof passengerDiscountEntity);
    } else {
        var passengerDiscountEntity = DISCOUNT_NOT
        console.log("Percentuale di sconto è " + DISCOUNT_NOT * 100 + "%", typeof passengerDiscountEntity);
    }
    //         - Creare la variabile "priceBasic" e calcolare il suo valore
    const priceBasic = Number((distanceTrip * PRICE_KM).toFixed(2));
    console.log("Prezzo di base è " + priceBasic + " " + "Euro", typeof priceBasic);
    //         - Creare la variabile "dicountPassenger"
    //             - discountPassenger = priceBasic * passengerDiscountEntity
    const discountPassenger = priceBasic * passengerDiscountEntity;
    console.log("Sconto in EURO è " + discountPassenger + " " + "Euro", typeof discountPassenger);
    //         - Creare la variabile "totalPrice"
    //             - totalPrice = priceBasic - discountPassenger 
    const totalPrice = Number((priceBasic - discountPassenger).toFixed(2));
    console.log("Prezzo totale è " + totalPrice + " " + "Euro", typeof totalPrice);
});
      
//         - Creare console log per controllo
// # Creazione biglietto

// - Pescare Dom Elementi con id e assegnare i valori di interesse








