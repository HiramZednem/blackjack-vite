
/**
 * 
 * @param {Array<string>} deck 
 * @returns {String} carta extraida del deck
 */
export const pedirCarta = (deck) => {
    if (!deck) throw new Error('deck es obligatorio')

    if ( deck.length === 0 ) throw 'No hay cartas en el deck';
    return deck.pop()
}