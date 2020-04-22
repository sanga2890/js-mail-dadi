// definire un array con la una lista di mail valide
var mail_chart = ['pippo@gmail.com' , 'paperino@gmail.com' , 'pluto@gmail.com' , 'topolino@gmail.com' , 'nonnapapera@gmail.com' ];
console.log(mail_chart);
// chiedere all'utente di inserire una mail
var insertmail = prompt('Inserisci una mail valida: ');
console.log(insertmail);
// dichiaro variabile false
var verify = false;
// ciclo for per verificare ogni singolo elemento dell'array
for (var i = 0; i < mail_chart.length; i++) {
// se la mail inserita è uguale ad una di quelle inserite nell'array metto la variabile "verify = true"
    if (insertmail == mail_chart[i]) {
        verify = true;
    }
}
// se verify è uguale a true stampa messaggio con accesso garantito
if (verify == true) {
    console.log('Accesso Garantito');
// altrimenti stampa messaggio con accesso negato
} else {
    console.log('Accesso Negato');
}
