import React, { useEffect } from 'react'; 
 
export const Mensaje = () => { 
 
    //Implementamos useEffect con cleanup. No tiene ninguna dependencia (en su segundo parámetro) por lo cual 
    // este useEffect se va ejecutar solamente cuando el componente se ejecute por primera vez. 
    useEffect(() => { 
        console.log('Componente montado...'); 
 
        return () => { 
            console.log('Componente desmontado...'); 
        } 
    }, []); 
 
    return ( 
        <> 
            <h3>Encontraste la camara de los secretos</h3> 
        </>
    )
}