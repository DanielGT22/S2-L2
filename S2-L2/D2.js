/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 10
let numero2 = 20

if (numero1 > numero2) {
  console.log ("numero1 è quello più grande");
}
else {
  console.log ("Numero2 è quello più grande");
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero3 = 15
if (numero3 === 5) {
  console.log("Equal");
}
else {
  console.log("Not Equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero4 = 7
let divisibile = numero4 % 5
console.log(divisibile);
if (divisibile === 0 ) {
  console.log("Divisibile per 5");

}
else {
   console.log("non");
  }




/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure
   se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero5 = 6
let numero6 = 9

if (numero5 === 8 || numero6 === 8 || (numero5 + numero6) === 8 ||(numero5 - numero6) === 8 ||
 (numero6 + numero5) === 8 ||(numero6 - numero5) === 8 ) {
  console.log("vero");
}
else {
  console.log("Non è 8");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile
   "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 50
let totalPrice = null
if (totalShoppingCart >= 50) {
  console.log("Allegeable for Free shipping");
}
else if (totalShoppingCart < 50) {
  console.log("Not allegeable for free shipping");
  totalPrice = totalShoppingCart + 10
  console.log(totalPrice);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se 
  le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let blackFirdaySales = 0.2

if (totalShoppingCart * blackFirdaySales >= 50) {
  console.log("Allegeable for Free shipping");
}
else if (totalShoppingCart * blackFirdaySales < 50) {
  console.log("Not allegeable for free shipping");
  totalPrice = totalShoppingCart + 10
  console.log(totalPrice);

}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore,
   dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let var1 = 42
let var2 = 31
let var3 = 29

let ordine = [var1, var2, var3]

if (ordine[0] > ordine[1] > ordine[2]) {
  console.log("ok");
}
else if (ordine[1] > ordine[2]) {

}
else if (ordine[2] > ordine[1]){
  ordine.pop(2)
  ordine.push(var2)
  console.log(ordine[2]);
}
//da finire 

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no
   (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

numero7 = "kiwi"
if (typeof numero7 === "number") {
  console.log("è un numero");
}
else if (typeof numero7 != "number") {
  console.log("Non è un numero");
  
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numero8 = 11
let pariOdispari = numero8 % 2
console.log(pariOdispari); 
if (pariOdispari === 1) {
  console.log("Dispari");
  
}
else if (pariOdispari === 0) {
  console.log("Pari");
  
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
      
    }
    
*/
let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* No ho capito la domanda */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  location: {
    city: "Toronto"
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento 
  della proprietà "skills".
*/
me.skills.pop(-1)
console.log(me);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let vuoto = [null]
for ( vuoto = 1; vuoto <= 10; vuoto++)
console.log(vuoto);

// non so se è il modo giusto, mi ricordavo che sul arduino si faceva cosi :) //


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for ( vuoto = 1; vuoto <= 10; vuoto++)
console.log(vuoto);
vuoto.pop();
vuoto.push(100);
console.log(vuoto);

//non so perche non funziona //