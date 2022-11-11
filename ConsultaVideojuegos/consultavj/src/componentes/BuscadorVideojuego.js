import React, { useMemo } from 'react'; 
import { useLocation } from 'react-router'; 
import queryString from 'query-string'; 
import { GameCollection } from './GameCollection'; 
import { GameCollectionItem } from './GameCollectionItem';
import { InfoVideojuegos } from './InfoVideojuegos';
import { useForm } from '../hooks/context/useForm';  
import { getGamesBySearch } from './getGamesBySearch';
 
export const BuscadorVideojuego = () => { 
 
    const location = useLocation(); 
    console.log(location.search); 

    //Utilizamos la librería query-string para parsear el query string de la url.  
    console.log(queryString.parse(location.search)); 

    //Desestructuramos la variable 'busqueda' del query string.  
    const { busqueda = '' } = queryString.parse(location.search); 
    console.log(busqueda);     

 
    const [formValues, handleInputChange] = useForm({ 
        criterioBusqueda: busqueda 
    }); 
 
    const { criterioBusqueda } = formValues; 
 
    //Utilizamos useMemo para memorizar la busqueda  
    const juegosFiltrados = useMemo(() => getGamesBySearch(busqueda), [busqueda]); 
     
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
                        (game => ( 
                            <GameCollection key={game.id} 
                                      game={game}/> 
                        )) 
                    } 
 
                </div> 
            </div> 
        </> 
    ) 

    function Card(Props){
        return(

            <div className="card">
                <img className="w-100 h-100"  src={Props.background_image}/>
                <div className="card-title">{Props.name}</div>  
                <div className="card-body">Rating: {Props.rating}</div>
                <div className="card-body">Metacritic: {Props.metacritic}</div>
            </div>
        )
    }
 
} 