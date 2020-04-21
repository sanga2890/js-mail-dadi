// Gioco dei dadi

// chiedi all' utente di inserire un numero da 1 a 6
var player = prompt('Inserisci un numero da 1 a 6');
console.log('La tua giocata è: ' + player);

// verifica che il numero inserito sia compreso tra 1 e 6, in caso contrario ricarica la pagina fino a che l'input sarà corretto
if (player > 0 && player <= 6) {
    var verify = true;
} else {
    location.reload();
}

// programma un random per la giocata del computer
var computer = Math.floor(Math.random()* 6) + 1;
console.log('Giocata del Computer: ' + computer);

// verifica quale dei 2 numeri inseriti è maggiore
if (player > computer) {
    console.log('Hai vinto!');

} else if (player == computer) {
    console.log('Pareggio!');
} else {
    console.log('Hai perso!');
}
