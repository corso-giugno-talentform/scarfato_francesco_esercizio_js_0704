/**
 * ES5
 * Esercizio 9.1: Crea un oggetto "libro" con proprietà 
 * (titolo, autore, pagine, letto) e metodi per: 
 *      mostrare info del libro,
 *      segnare come letto/non letto,
 *      calcolare tempo di lettura stimato (assumendo 1 pagina = 2 minuti).
**/

function Person(firstname, lastname, age, gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;

    // getter
    this.stampaEta = function () {//getter
        if (this.age) {
            console.log('La tua età è: ' + this.age);
        } else {
            console.log('Ignota');
        }
    };

    // getter come funziona anonima (funzione di callback)
    this.getIndex = function(index) {
        console.log('Sono alla posizione: ' + index);
    };

    this.saluta = function () {
        if (this.gender == 'm') {
            console.log('Buongiorno sig. ' + this.firstname);
        } else if (this.gender == 'f') {
            console.log('Buongiorno sig.ra ' + this.firstname);
        } else {
            console.log('Buongiorno ' + this.firstname);
        }
    };
}

let group = [
    new Person('Francesco', 'Scarfato', 5, 'm'),
    new Person('Dasha', 'Scarfato', 2, 'f'),
    new Person('Anna', 'Vanzo', 3, 'f'),
];


group.forEach(function (person, index) {
    console.log(person.saluta());
    // console.log(person.firstname);
    console.log(person.getIndex(index));
    console.log(person.stampaEta());
});