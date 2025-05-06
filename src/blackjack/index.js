import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, insertarCarta, turnoComputadora, acumularPuntos } from './usecases';

(() => {
    'use strict';
    
    let deck = [];
  
    const puntosJugadores = []; 
    
    // Referencias HTML
    const btnPedir                = document.getElementById('btnPedir'),
          btnNuevo                = document.getElementById('btnNuevo'),
          btnDetener              = document.getElementById('btnDetener'),
          deckCartas              = document.querySelectorAll('.deck-cartas'),
          puntosJugadoresHTML     = document.querySelectorAll('small');
    
   
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);
  
        acumularPuntos(0, valorCarta(carta), puntosJugadores, puntosJugadoresHTML )
  
        insertarCarta(0, carta, deckCartas)
  
        if (puntosJugadores[0] > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            console.warn('perdiste');
            turnoComputadora(puntosJugadores, deckCartas, deck, puntosJugadoresHTML)
        } else if (puntosJugadores[0] == 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            console.warn('ou yea veintiuno');
            turnoComputadora(puntosJugadores, deckCartas, deck, puntosJugadoresHTML);
        }
  
  
    });
  
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores, deckCartas, deck, puntosJugadoresHTML);
    });
  
    btnNuevo.addEventListener('click', () => {
        btnDetener.disabled = false;
        btnPedir.disabled = false;
        puntosJugadores.forEach(( _, i ) => {
            puntosJugadoresHTML[i].innerHTML = 0;
            puntosJugadores[i] = 0;
            deckCartas[i].innerHTML = '';
        });
    });
  
    const inicializarJuego = (numeroJugadores = 1) => {
        deck = crearDeck();
  
        for(let i = 0; i < numeroJugadores + 1; i++) {
            puntosJugadores.push(0)
        }
  
        console.log({puntosJugadores});
    }
  
    inicializarJuego()
  })();