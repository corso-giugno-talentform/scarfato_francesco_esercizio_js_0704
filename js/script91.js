/**
 * Esercizio 9.1: Crea un oggetto "libro" con proprietà 
 * (titolo, autore, pagine, letto) e metodi per: 
 *      mostrare info del libro,
 *      segnare come letto/non letto,
 *      calcolare tempo di lettura stimato (assumendo 1 pagina = 2 minuti).
**/

let book = {
    titolo: 'Fahrenheit 451',
    autore: 'Ray Bradbury',
    pagine: 224,
    anno: 1953,
    letto: true,
    // Metodi
    isRead: function() {
        return this.letto == true ? 'si' : 'no';
    },

    tempoLettura: function() {
        return (this.pagine * 120) / 60;
    },
    
    info: function() {
        return `${this.titolo} autore ${this.autore} anno ${this.anno} pagine ${this.pagine}`;
    },

}

console.log(book);
console.log(book.info());
console.log('Libro ' + book.titolo + ' è stato letto: ' + book.isRead());
console.log('Tempo stimato di lettura (ore) ' + book.tempoLettura())

// usiamo i template per generare l'output
console.log(`Libro ${book.titolo} è stato letto: ${book.isRead()}`);
console.log(`Tempo stimato di lettura (ore) ${book.tempoLettura()}`);
