import React, { useState } from 'react'; 
import { useFetch } from './custom/useFetch';
import { MainAppRouter } from './routers/MainAppRouter';
 
export const VideojuegosApp = () => { 
 
    //Utilizamos el hook useState para inicializar la lista de generos de videojuegos. 
    const [generos, setGeneros] = useState(['action']); 

    const { loading, info } = useFetch(`https://api.rawg.io/api/games?key=1d1f0a311f094ba3af26503c85757806&genres=`+ encodeURI(generos));

    {/*Se elimina la función agregaGenero*/} 
 
    return ( 
        <> 
            <MainAppRouter />
 
        </> 
    ) 
} 