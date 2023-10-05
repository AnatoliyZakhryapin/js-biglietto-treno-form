# Calcolo del prezzo del biglietto del treno

- Creare input per i inserimento dei dati in html
    - Creare input per Nome, Cognome e distanza
    - Creare select per discount
- Creare Button  in html
- Creare DOM element per ogni tipo di input
- Recupero dei dai tramite il button e il calcolo del prezzo del viaggio
    - Creazione delle variabile con i dati fissi
         - Creare la variabile "PRICE_KM" con valore 0.21 (valore euro per km)
         - Creare la variabile "DISCOUNT_UNDER_18" 20% in decimali
         - Creare la variabile "DISCOUNT_OVER_65" 40% in diecimali
         - Creare la variabile "DISCOUNT_NOT" 0% in decimal
    - Creazione del evento onclick
        - Recupero il nome dal input
            - recupero il valore presente nell'input e lo salvo in una variabile passengerName
        - Recupero il Surname dal input
            - recupero il valore presente nell'input e lo salvo in una variabile passengerSurname
        - Recupero il distanza dal input
            - recupero il valore presente nell'input e lo salvo in una variabile distanceTrip
        - Recupero la tipologia dello sconto input
            - recupero il valore presente nell'input e lo salvo in una variabile
        - Creare la variabile "priceBasic"
        - Calcolare il prezzo base 
             priceBasic = distanceTrip * PRICE_KM
        - Creare la variabile "passengerDiscountEntity"
            -  SE (inputDiscountSelectDOMElement.value == 0) 
                - passengerDiscountEntity = DISCOUNT_UNDER_18
            ALTRIMENTI SE (inputDiscountSelectDOMElement.value == 1) 
                - passengerDiscountEntity = DISCOUNT_OVER_65
            ALTRIMENTI () 
                - passengerDiscountEntity = DISCOUNT_NOT
        - Creare la variabile "dicountPassenger"
            - discountPassenger = priceBasic * passengerDiscountEntity
        - Creare la variabile "totalPrice"
            - totalPrice = priceBasic - discountPassenger 
        - Creare console log per controllo
# Creazione biglietto

- Pescare Dom Elementi con id e assegnare i valori di interesse