/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Nota: 
Non è necessario provvedere alla validazione delle email
*/

const emails = [
  "user1@test.com",
  "user2@test.com",
  "user3@test.com",
  "userRandom@test.com",
];
const userEmail = prompt("Inserisci la tua email", "userRandom@test.com");
let isUserPresent = false;

for (let i = 0; i < emails.length && !isUserPresent; i++) {
  const currentEmail = emails[i];
  if (userEmail === currentEmail) {
    isUserPresent = true;
  }
}

if (isUserPresent) {
  alert("OK SEI IN LISTA");
} else {
  alert("MI SPIACE NON SEI IN LISTA");
}
