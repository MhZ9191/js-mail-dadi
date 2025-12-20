/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let dadoComputer = Math.floor(Math.random() * 6 + 1);
// let dadoUser = Math.floor(Math.random() * 6 + 1);
// let vincitore = "";

// if (dadoUser > dadoComputer) {
//   vincitore = "IL VINCITORE E' IL GIOCATORE!";
// } else if (dadoComputer > dadoUser) {
//   vincitore = "IL VINCITORE E' IL COMPUTER!";
// } else {
//   vincitore = "PAREGGIO!";
// }

// console.log(`DADO GIOCATORE=${dadoUser}
// DADO COMPUTER=${dadoComputer}
// ${vincitore}`);

// * VERSIONE ALTERNATIVA

let isStop = false;
let dadoUser = 0;
let risultato;
let msgStop = "";

for (let i = 0; i < 99999 && !isStop; i++) {
  dadoUser = parseInt(prompt("Inserisci il valore del tuo dado: "));
  risultato = dadoUser - dadoComputer;
  if (dadoUser <= 0 || dadoUser > 6) {
    alert(
      "Il numero inserito non va bene! Deve essere compreso tra 1 e 6!\n\n"
    );
  } else if (risultato > 0) {
    alert(
      `Dado user=${dadoUser}\nDado computer=${dadoComputer}\nIl vincitore è l'user!\n\n`
    );
  } else if (risultato < 0) {
    alert(
      `Dado user=${dadoUser}\nDado computer=${dadoComputer}\nIl vincitore è il computer!\n\n`
    );
  } else {
    alert("Pareggio!\n\n");
  }

  msgStop = prompt('Se desideri fermarti inserisci "STOP"');
  if (msgStop === "STOP") {
    isStop = true;
  }
}

alert("Grazie per aver giocato!");
