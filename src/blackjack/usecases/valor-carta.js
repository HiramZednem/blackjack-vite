/**
 * 
 * @param {String} carta 
 * @returns {Number}
 */
export const valorCarta = ( carta ) => {
    if(!carta) throw new Error('carta es obligatoria')

    const valor = carta.substring(0, carta.length - 1); 
                
    return ( isNaN(valor) ) ?
            ( valor === 'A' ) ? 11 : 10
            : parseInt(valor);
}