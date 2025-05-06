
export const acumularPuntos = ( jugador, puntos, puntosJugadores, puntosJugadoresHTML ) => {
    puntosJugadores[jugador] += puntos;
    puntosJugadoresHTML[jugador].innerHTML = puntosJugadores[jugador];
}