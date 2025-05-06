import { shuffle } from "underscore";

const tiposDeCarta     = ['C', 'D', 'H', 'S'],
      tiposEspeciales = ['A', 'J', 'Q', 'K'];
/**
 * @returns {Array<String>} retorna un nuevo deck de cartas 
 */
export const crearDeck = () => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('Tipos de Carta es obligatorio como un arreglo de string')
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('Tipos especiales es obligatorio como un arreglo de string')
        
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for(let tipo of tiposDeCarta) {
            deck.push(`${i}${tipo}`);
        }
    }

    for( let especial of tiposEspeciales ) {
        for(let tipo of tiposDeCarta) {
            deck.push(`${especial}${tipo}`);
        }
    }
    console.log(deck)
    return shuffle(deck);
}