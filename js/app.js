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
const DISCOUNT_NOT_SELECT = "Discount non selezionato";
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
    if (inputDiscountSelectDOMElement.value == 1) {
        var passengerDiscountEntity = DISCOUNT_UNDER_18
        var categoryDiscount = "Sconto Under18";
        console.log("Percentuale di sconto è " + DISCOUNT_UNDER_18 * 100 + "%", typeof passengerDiscountEntity);
    } else if (inputDiscountSelectDOMElement.value == 3) {
        var passengerDiscountEntity = DISCOUNT_OVER_65
        var categoryDiscount = "Sconto Over65";
        console.log("Percentuale di sconto è " + DISCOUNT_OVER_65 * 100 + "%", typeof passengerDiscountEntity);
    } else if (inputDiscountSelectDOMElement.value == 2) {
        var passengerDiscountEntity = DISCOUNT_NOT
        var categoryDiscount = "non applicato";
        console.log("Percentuale di sconto è " + DISCOUNT_NOT * 100 + "%", typeof passengerDiscountEntity);
    } else {
        var passengerDiscountEntity = DISCOUNT_NOT_SELECT
        var categoryDiscount = "non applicato";
        console.log(DISCOUNT_NOT_SELECT, typeof passengerDiscountEntity);
        console.dir(passengerDiscountEntity)
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
   
    // btnDOMElement.dataset.bsToggle = "modal"
    // console.dir(btnDOMElement)
    // console.log(btnDOMElement.dataset.bsToggle)
    // document.querySelector(" .modal").dataset.bsBackdrop = "static"
    // data-bs-toggle="modal" 
    // data-bs-target="#staticBackdrop"
    // - Controllo corretto inserimento dei dati
        const alertDOMElement = document.getElementById("alert");
        if (passengerName === "") {
            // var passengerNameUndefined = "Inserisci il nome"
            // pNode.appendChild(document.createTextNode(passengerNameUndefined + "." + " "));
            // alertDOMElement.innerHTML += "<h1 id=alertName>" + passengerNameUndefined + "</h1>"
            document.getElementById("alertName").classList.remove ("d-none");
            inputNameDOMElement.classList.remove ("border-success");
            inputNameDOMElement.classList.add ("border-danger", "border-3");
            console.log("nome non inserito", typeof passengerNameUndefined)
        } else {
            document.getElementById("alert").classList.add ("d-none");
            document.getElementById("alertName").classList.add ("d-none");
            inputNameDOMElement.classList.remove ("border-danger", "border-3");
            inputNameDOMElement.classList.add ("border-success");
        }
        
        if (passengerSurname === "") {
            // var passengerSurnameUndefined = "Inserisci il cognome"
            // pNode.appendChild(document.createTextNode(passengerSurnameUndefined + "." + " "));
            // alertDOMElement.innerHTML += "<h1 id=alertSurname>" + passengerSurnameUndefined + "</h1>"
            document.getElementById("alertSurname").classList.remove ("d-none");
            inputSurnameDOMElement.classList.remove ("border-success");
            inputSurnameDOMElement.classList.add ("border-danger", "border-3");
            console.log("Cognome non inserito", typeof passengerSurnameUndefined)
        } else {
            document.getElementById("alert").classList.add ("d-none");
            document.getElementById("alertSurname").classList.add ("d-none");
            inputSurnameDOMElement.classList.remove ("border-danger", "border-3");
            inputSurnameDOMElement.classList.add ("border-success");
        }
        
        if (isNaN(distanceTrip)) {
            var distanceTripNull = "Inserisci la distanza"
            // pNode.appendChild(document.createTextNode(distanceTripNull + "." + " "));
            // alertDOMElement.innerHTML += "<h1 id=alertDistance>" + distanceTripNull + "</h1>"
            document.getElementById("alertDistance").classList.remove ("d-none");
            document.getElementById("alertDistance").innerHTML = distanceTripNull;
            inputDistanceTripDOMElement.classList.remove ("border-success");
            inputDistanceTripDOMElement.classList.add ("border-danger", "border-3");
            console.log("Distanza non inserita");
        } else if (distanceTrip <= 0) {
            var distanceTripNull = "Il valore di distanza deve essere maggiore di 0"
            document.getElementById("alertDistance").classList.remove ("d-none");
            document.getElementById("alertDistance").innerHTML = distanceTripNull;
            inputDistanceTripDOMElement.classList.remove ("border-success");
            inputDistanceTripDOMElement.classList.add ("border-danger", "border-3");
            console.log("Distanza non inserita");
        } else {
            document.getElementById("alert").classList.add ("d-none");
            document.getElementById("alertDistance").classList.add ("d-none");
            inputDistanceTripDOMElement.classList.remove ("border-danger", "border-3");
            inputDistanceTripDOMElement.classList.add ("border-success");
        }
        
        if (isNaN(passengerDiscountEntity)) {
            // var passengerDiscountEntitypNull = "Selezioni tipo di'"
            // pNode.appendChild(document.createTextNode(passengerAgepNull + "." + " "));
            // alertDOMElement.innerHTML += "<h1>" + passengerDiscountEntitypNull + "</h1>"
            document.getElementById("alertDiscountNull").classList.remove ("d-none");
            inputDiscountSelectDOMElement.classList.remove ("border-success");
            inputDiscountSelectDOMElement.classList.add ("border-danger", "border-3");
            console.log("Eta non inserita")
        } else {
            document.getElementById("alert").classList.add ("d-none");
            document.getElementById("alertDiscountNull").classList.add ("d-none");
            inputDiscountSelectDOMElement.classList.remove ("border-danger", "border-3");
            inputDiscountSelectDOMElement.classList.add ("border-success");
        }

        if (typeof passengerNameUndefined === 'string' || typeof passengerSurnameUndefined === 'string' || typeof distanceTripNull === 'string' || distanceTrip <= 0 || inputDiscountSelectDOMElement.value == 0) {
            alert("I dati non sono inserite correttamente!")
            document.getElementById("alert").classList.remove ("d-none");
        } else {
            document.getElementById("titleTicket").classList.remove ("d-none");
            document.getElementById("cardTicket").classList.remove ("d-none");
        }


    // # Creazione biglietto 
    // - Pescare Dom Elementi con id e assegnare i valori di interesse

    document.getElementById("ticketPassengerName").innerHTML = passengerName;
    document.getElementById("ticketPassengerSurname").innerHTML = passengerSurname;
    document.getElementById("ticketDistanceTrip").innerHTML = distanceTrip;
    document.getElementById("ticketCategoryDiscount").innerHTML = categoryDiscount;
    document.getElementById("ticketDiscount").innerHTML = passengerDiscountEntity * 100 + " %";
    document.getElementById("ticketPriceBasic").innerHTML = priceBasic + " Euro";
    document.getElementById("ticketTotalPrice").innerHTML = totalPrice + " Euro";

});
      
//         - Creare console log per controllo






