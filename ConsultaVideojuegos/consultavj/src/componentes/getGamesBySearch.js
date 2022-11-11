import { InfoVideojuegos } from "./InfoVideojuegos";
 
export const getGamesBySearch = (busqueda = '') => { 
    if(busqueda === ''){ 
        return []; 
    } 
    return InfoVideojuegos.filter(juego => juego.nombre.toLowerCase().includes(busqueda.toLowerCase())); 
} 