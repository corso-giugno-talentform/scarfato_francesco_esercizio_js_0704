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

        console.log(this.balance);

        console.log(`${this.account} deposita ${deposito}`);
    };

    this.preleva = function (prelevo) {
        if (this.balance < prelevo) {
            console.log(`Il tuo saldo è di ${this.balance} NON puoi prelevare ${prelevo}`);
            return false;
        }
        this.balance -= prelevo;
        console.log(`${this.account} preleva ${prelevo}`);
    };

    this.visualizzaSaldo = function () {
        console.log(`Visualizzo il saldo per ${this.account} pari a ${this.balance}`);
    };

    this.calcolaInteressi = function () {
        this.interessi = (this.balance * 1) / 100;
        console.log('Calcolo gli interessi! ' + this.interessi);
    };
}

let backAccounts = [
    new Bank('Francesco', 'abc-123', 100),
    new Bank('Dasha', 'def-456', 90),
    new Bank('Anna', 'ghi-789', 80),
];


backAccounts.forEach(function (account, index) {
    console.log(account);
    // let deposito = 100;
    // let prelevo = 200;
    // let prelevo = 200;

    let deposito = Math.floor(Math.random() * 100) + 1;
    let prelevo = Math.floor(Math.random() * 100) + 1;

    account.deposita(deposito);
    account.preleva(prelevo);
    account.visualizzaSaldo();
    account.calcolaInteressi();
});