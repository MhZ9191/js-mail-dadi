/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let dadoComputer = Math.floor(Math.random() * 6 + 1);
let dadoUser = Math.floor(Math.random() * 6 + 1);
let vincitore = "";

if (dadoUser > dadoComputer) {
  vincitore = "IL VINCITORE E' IL GIOCATORE!";
} else if (dadoComputer > dadoUser) {
  vincitore = "IL VINCITORE E' IL COMPUTER!";
} else {
  vincitore = "PAREGGIO!";
}

console.log(`DADO GIOCATORE=${dadoUser}
DADO COMPUTER=${dadoComputer}
${vincitore}`);
