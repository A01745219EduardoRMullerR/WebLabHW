import React, { useEffect, useState } from 'react'; 
 
export const Mensaje = () => {
    
    const [coordenadas, setCoordenadas] = useState({
        x: 0,
        y: 0
    });
 
    //Implementamos useEffect con cleanup. No tiene ninguna dependencia (en su segundo parámetro) por lo cual 
    // este useEffect se va ejecutar solamente cuando el componente se ejecute por primera vez. 
    useEffect(() => { 
        console.log('Componente montado...');
        //Obtenemos las coordenadas X y Y del mouse y las mostramos en la consola del navegador. 
        const handleCoordenadas = e => {
            setCoordenadas({
                x: e.screenX,
                y: e.screenY
            });
            window.addEventListener('mousemove', handleCoordenadas)
        }
 
        return () => { 
            console.log('Componente desmontado...');
            window.addEventListener('mousemove', handleCoordenadas); 
        } 
    }, []); 
 
    return ( 
        <> 
            <h3>Encontraste la camara de los secretos</h3>
            <h4>Coordenadas: {coordenadas.x} {coordenadas.y}</h4>
        </>
    )
}