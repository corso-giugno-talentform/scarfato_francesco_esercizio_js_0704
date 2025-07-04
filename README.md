Costruttori di Oggetti
I costruttori sono funzioni speciali che permettono di creare più istanze di oggetti con la stessa struttura.

Funzioni Costruttore (ES5)
Acronimo di ECMAScript 5, è la quinta edizione dello standard JavaScript, pubblicata nel 2009

// Definizione del costruttore
function Persona(nome, cognome, eta, citta) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.citta = citta;
    this.sposato = false;

    this.presentati = function() {
        return 'Ciao, sono '+this.nome + this.cognome+', ho '+this.eta+'anni e vivo a '+this.citta';
    };
  
}

// Creazione di oggetti usando il costruttore
let persona1 = new Persona("Mario", "Rossi", 30, "Roma");
let persona2 = new Persona("Lucia", "Bianchi", 25, "Milano");
// VERSIONE MODERNA CON CLASSI (ES6+)
// Stesso concetto, sintassi più pulita
class PersonaModerna {
    constructor(nome, cognome, eta, citta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.citta = citta;
        this.sposato = false;
    }
    
    presentati() {
			 return 'Ciao, sono '+this.nome + this.cognome+', ho '+this.eta+'anni e vivo a '+this.citta';
    }
    
  
}

let persona1 = new Persona("Mario", "Rossi", 30, "Roma");
let persona2 = new Persona("Lucia", "Bianchi", 25, "Milano");
Esercizi
Esercizio 9.1: Crea 1 oggetto "libro" con proprietà (titolo, autore, pagine, letto) e metodi per: mostrare info del libro, segnare come letto/non letto, calcolare tempo di lettura stimato (assumendo 1 pagina = 2 minuti)

Esercizio 9.2
Crea una classe "ContoBancario" con un Costruttore e istanzia 3 conti:

Proprietà: numero conto, intestatario, saldo
Metodi: deposita, preleva, visualizzaSaldo, calcolaInteressi (1% annuo)
Crea almeno 3 conti diversi e simula alcune operazioni.