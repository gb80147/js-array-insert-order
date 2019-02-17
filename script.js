var databaseCognomi = [                                   //creazione del database cognomi già in memoria
  "belfiore",
  "migliaccio",
  "mantice",
  "nappo",
  "imperato",
  "vitiello",
  "mazza"];

var inserisciCognome = prompt("Scrivi il tuo cognome:");  //rischiesta di immissione cognome
databaseCognomi.push(inserisciCognome);                   //inserisco il cognome nel database
databaseCognomi.sort();                                  //ordina in ordine alfabetico

console.log(databaseCognomi)                             //controllo che tutto funzioni

for (var i = 0; i < databaseCognomi.length; i++) {      //inizio ciclo per risultato posizione
 if (inserisciCognome == databaseCognomi[i]) {
   alert(`Sei il numero ${i+1} della lista.`);         //inserisco '+1' accanto ad 'i' per fixare il problema di indicizzazione che parte da 0
 }
}
