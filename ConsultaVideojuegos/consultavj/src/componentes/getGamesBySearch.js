export const getGamesBySearch = (busqueda = '') => { 
    if(busqueda === ''){ 
        return []; 
    } 

    const juegos = JSON.parse(localStorage.getItem("games"));
    console.log ('Juegos Value = ',juegos)
    return juegos.filter(juego => juego.juego.name.toLowerCase().includes(busqueda.toLowerCase())); 
}
