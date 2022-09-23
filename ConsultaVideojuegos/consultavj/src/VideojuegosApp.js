import React, { useState } from 'react'; 
import { AgregaGenero } from './componentes/AgregaGenero'; 
import { ResultadoVideojuegos } from './componentes/ResultadoVideojuegos'; 
import { InfoVideojuegos } from './componentes/InfoVideojuegos';
import { useFetch } from './custom/useFetch';
 
export const VideojuegosApp = () => { 
 
    //Utilizamos el hook useState para inicializar la lista de generos de videojuegos. 
    const [generos, setGeneros] = useState(['action']); 

    const { loading, info } = useFetch(`https://api.rawg.io/api/games?key=1d1f0a311f094ba3af26503c85757806&genres=`+ encodeURI(generos));

    {/*Se elimina la función agregaGenero*/} 
 
    return ( 
        <> 
            <div className="jumbotron jumbotron-fluid"> 
                <div className="container"> 
                    <h1 className="display-4">Gamebook</h1> 
                    <p className="lead">¡Bienvenido a la página donde podrás consultar información de videojuegos!</p> 
 
 
                    {/* 
                    Creamos una propiedad 'setGeneros' al componente AgregaGenero y le pasamos como valor la 
                    referencia de la función 'setGeneros' que obtuvimos en la desestructuración del useState 
                    */} 
                    <AgregaGenero setGeneros={setGeneros} />

                    
 
                    {/*Se eliminó el botón*/} 
 
                    {/* 
                    Creamos la lista de géneros 
                    */} 

                    {
                        loading?(
                            <div className="alert alert-info text-center"> 
                            Loading... 
                            </div> 
                        ):
                        (
                        <>
                        <ol className="list-group list-group-numbered"> 
                        { 
                            generos.map(genero => { 
                                //Reemplazamos el elemento <li> por la llamda al componente ResultadoVideojuegos, pasando 
                                // como parámetro el género. Se tiene que utilizar la propiedad key al igual que se hizo  
                                // con el elemento <li> anteriormente 
                                return <InfoVideojuegos
                                    key={genero}
                                    genero={genero}/>
                            }) 
                        } 
                        </ol>
                        </>
                        )
                    }
                    {}
                </div>
                 
            </div> 
 
        </> 
    ) 
} 