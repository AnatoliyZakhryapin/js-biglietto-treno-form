# Calcolo del prezzo del biglietto del treno

- Creare input per i inserimento dei dati
    - Creare input per Nome, Cognome e distanza
    - Creare select per discount
- Creare Button 
- Richiesta Nome
    - Creare la variabile "passengerName"
    - Pescare il dato dal input di riferimento
- Richiesta Cognome
    - Creare la variabile "passengerSurname"
    - Pescare il dato dal input di riferimento
- Richiesta della distanza del percorso
    - Creare la variabile "distanceTrip"
    - Pescare il dato dal input di riferimento
    - Trasformare il valore dalla stringa in numero con decimali (evitando anche Erorre del inserimento con la virgola)
- Controllo corretto inserimento dei dati
- Calcolo del prezzo totale del viaggio
    - Creacre la funzione totalPrice
        - Creare la variabile "PRICE_KM" con valore 0.21 (valore euro per km)
        - Creare la variabile "DISCOUNT_UNDER_18" 20% in decimali
        - Creare la variabile "DISCOUNT_OVER_65" 40% in decimali
        - Creare la variabile "DISCOUNT_NOT" 0% in decimali
        - Creare la variabile "priceBasic"
        - Calcolare il prezzo base 
            priceBasic = distanceTrip * PRICE_KM
        - Creare la variabile "passengerDiscountEntity"
            SE (passengerAge < 18) 
                - passengerDiscountEntity = DISCOUNT_UNDER_18
            ALTRIMENTI SE (passengerAge > 65) 
                - passengerDiscountEntity = DISCOUNT_OVER_65
            ALTRIMENTI () 
                - passengerDiscountEntity = DISCOUNT_NOT
        - Creare la variabile "dicountPassenger"
            - discountPassenger = priceBasic * passengerDiscountEntity
        - Creare la variabile "totalPrice"
            - totalPrice = priceBasic - discountPassenger   
    - Creare evento button onclick
# Creazione biglietto

- Pescare Dom Elementi con id e assegnare i valori di interesse