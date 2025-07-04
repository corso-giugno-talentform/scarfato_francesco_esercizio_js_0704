/**
 * ES5
 * Esercizio 9.2
 * Crea una classe "ContoBancario" con un Costruttore e istanzia 3 conti:
 * Proprietà: numero conto, intestatario, saldo
 * Metodi: deposita, preleva, visualizzaSaldo, calcolaInteressi (1% annuo)
 * Crea almeno 3 conti diversi e simula alcune operazioni
 **/

function Bank(account, number, balance) {
    this.account = account;
    this.number = number;
    this.balance = balance;
    this.interessi = 0;

    this.deposita = function (deposito) {
        this.balance += deposito;
        console.log(this.account + 'Deposito! ' + deposito);
    };

    this.preleva = function (prelevo) {
        this.balance -= prelevo;

        console.log(this.account + ' preleva! ' + prelevo);
    };

    this.visualizzaSaldo = function () {
        console.log(this.account + ' visualizzaSaldo! ' + this.balance);
    };

    this.calcolaInteressi = function () {
        this.interessi = (this.balance * 1) / 100;
        console.log('calcolaInteressi! ' + this.interessi);
    };
}

let backAccounts = [
    new Bank('Francesco', 'abc-123', 100),
    new Bank('Dasha', 'def-456', 90),
    new Bank('Anna', 'ghi-789', 80),
];


backAccounts.forEach(function (account, index) {
    console.log(account);
    let deposito = Math.floor(Math.random() * 100) + 1;
    let prelevo = Math.floor(Math.random() * 100) + 1;

    console.log(account.deposita(deposito));
    console.log(account.preleva(prelevo));
    console.log(account.visualizzaSaldo());
    console.log(account.calcolaInteressi());
});