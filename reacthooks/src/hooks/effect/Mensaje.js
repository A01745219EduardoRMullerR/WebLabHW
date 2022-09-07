import React, { useEffect } from 'react'; 
 
export const Mensaje = () => { 
 
    //Implementamos useEffect con cleanup. No tiene ninguna dependencia (en su segundo parámetro) por lo cual 
    // este useEffect se va ejecutar solamente cuando el componente se ejecute por primera vez. 
    useEffect(() => { 
        console.log('Componente montado...');
        //Obtenemos las coordenadas X y Y del mouse y las mostramos en la consola del navegador. 
        window.addEventListener('mousemove', (e) => { 
            const coordenadas = { x: e.x, y: e.y }; 
            console.log(coordenadas); 
        }); 
 
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