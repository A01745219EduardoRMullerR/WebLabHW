import React from 'react'; 
import { GameCollection } from './GameCollection'; 
import { GameCollectionItem } from './GameCollectionItem';
import { InfoVideojuegos } from './InfoVideojuegos';
import { useForm } from '../hooks/context/useForm';  
 
export const BuscadorVideojuego = () => { 
 
    const juegosFiltrados = InfoVideojuegos; 
 
    const [formValues, handleInputChange] = useForm({ 
        criterioBusqueda: '' 
    }); 
 
    const { criterioBusqueda } = formValues; 
     
    const handleBusqueda = (e) => { 
        e.preventDefault(); 
        console.log(criterioBusqueda); 
    } 
 
    return ( 
        <> 
            <h1>Buscador</h1> 
            <br/> 
 
            <div className="row"> 
                <div className="col-5"> 
                    <h4>Mi Búsqueda</h4> 
                    <br /> 
                    <form onSubmit={handleBusqueda}> 
                        <input  
                            type="text" 
                            className="form-control"  
                            name="criterioBusqueda"
                            value={criterioBusqueda} 
                            onChange={handleInputChange} 
                            autoComplete="off"  
                        /> 
 
                        <button type="submit" 
                                className="btn m-1 btn-block btn-outline-primary"> 
                            Buscar 
                        </button> 
                    </form> 
                </div> 
 
                <div className="col-7"> 
                    <h4>Resultado</h4> 
                    <br /> 
 
                    { 
                        //Recorremos el resultado de la búsqueda de los juegos. 
                        juegosFiltrados.map(game => ( 
                            <InfoVideojuegos key={game.id} 
                                      game={game}/> 
                        )) 
                    } 
 
                </div> 
            </div> 
        </> 
    ) 
 
} 