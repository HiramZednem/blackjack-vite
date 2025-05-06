/**
 * 
 * @param {Number} jugador Posicion en el arreglo de decks del jugador
 * @param {String} carta 
 * @param {Element} deckCartas Referencia HTML a los decks de los jugadores
 */
export const insertarCarta = ( jugador, carta, deckCartas ) => {
    const imagenCarta = document.createElement('img');
    imagenCarta.classList.add('carta');
    imagenCarta.src = `assets/cartas/${carta}.png`;
    deckCartas[jugador].append(imagenCarta);
};