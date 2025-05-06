import { insertarCarta, valorCarta, pedirCarta, acumularPuntos } from "./";

export const turnoComputadora = (puntosJugadores, deckCartas, deck, puntosJugadoresHTML) => {
  const computadora = puntosJugadores.length - 1;

  while (
    puntosJugadores[computadora] <= puntosJugadores[0] ||
    puntosJugadores[0] == 0
  ) {
    const carta = pedirCarta(deck);

    acumularPuntos(computadora, valorCarta(carta), puntosJugadores, puntosJugadoresHTML);

    insertarCarta(computadora, carta, deckCartas);

    if (puntosJugadores[0] > 21 || puntosJugadores[0] == 0) break;
    if (puntosJugadores[computadora] == 21) break;
  }

  setTimeout(() => {
    if (puntosJugadores[computadora] > 21) {
      alert("ganaste");
    } else if (puntosJugadores[computadora] == 21 && puntosJugadores[0] == 21) {
      alert("empate");
    } else {
      alert("perdiste");
    }
  }, 50);
};
