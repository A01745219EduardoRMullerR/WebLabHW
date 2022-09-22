import React from "react";
import { useFetch } from "../../custom/useFetch";
import { useContador } from "../../custom/useContador";

export const MultipleCustomHooks = () => {
    
    const {state, increment} = useContador(1);
    console.log("State: " + state);
 
    //Utilizamos el custom hook 'useFetch' 
     //Utilizamos el custom hook 'useFetch'. Desestructuramos la información que devuelve el custom hook. 
     const { loading, info } = useFetch(`https://api.rawg.io/api/games/?${state}key=1d1f0a311f094ba3af26503c85757806`); 
     console.log(loading); 
     console.log(info); 
  
     //Desestructuramos la información que vamos a utilizar, de info.  
     const { name_original, description } = !! info && info;
     console.log(name_original); 
     console.log(description); 
  
     return ( 
         <> 
          <h1>Información de Videojuegos</h1> 
            <hr /> 
 
            { 
                loading? 
                    ( 
                        //Si loading es true, mostramos el mensaje 'loading' 
                        <div className="alert alert-info text-center"> 
                            Loading... 
                        </div> 
                    ) 
                    : 
                    ( 
                        //Si loading es false se muestra la información del juego. 
                        <>
                        <div> 
                            {name_original} 
                        </div>
                        <div dangerouslySetInnerHTML={{__html: description}}></div> {/**Es lo mismo pero se puede usar para qutar el html que estorba */}
                        </>
                    ) 
            }

            <button className="btn btn-primary"
                onClick={increment}>Increment</button>

        </> 
    ); 
} 