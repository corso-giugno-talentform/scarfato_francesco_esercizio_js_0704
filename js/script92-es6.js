/**
 * ES6
 * Esercizio 9.2
 * Crea una classe "ContoBancario" con un Costruttore e istanzia 3 conti:
 * Proprietà: numero conto, intestatario, saldo
 * Metodi: deposita, preleva, visualizzaSaldo, calcolaInteressi (1% annuo)
 * Crea almeno 3 conti diversi e simula alcune operazioni
 **/

class BankES6 {
    constructor(account, number, balance) {
        this.account = account;
        this.number = number;
        this.balance = balance;
        this.interessi = 0;
    }

    deposita(deposito) {
        this.balance += deposito;

        console.log(this.balance);

        console.log(`${this.account} deposita ${deposito}`);
    }

    preleva(prelevo) {
        if (this.balance < prelevo) {
            console.log(`Il tuo saldo è di ${this.balance} NON puoi prelevare ${prelevo}`);
            return false;
        }
        this.balance -= prelevo;
        console.log(`${this.account} preleva ${prelevo}`);
    }

    visualizzaSaldo() {
        console.log(`Visualizzo il saldo per ${this.account} pari a ${this.balance}`);
    }

    calcolaInteressi() {
        this.interessi = (this.balance * 1) / 100;
        console.log('Calcolo gli interessi! ' + this.interessi);
    }
}

let bankES6Accounts = [
    new BankES6('Francesco', 'ES6-abc-123', 100),
    new BankES6('Dasha', 'ES6-def-456', 90),
    new BankES6('Anna', 'ES6-ghi-789', 80),
];


bankES6Accounts.forEach(function (account, index) {
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