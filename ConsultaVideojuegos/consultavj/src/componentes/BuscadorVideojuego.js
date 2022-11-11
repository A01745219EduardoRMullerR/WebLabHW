import React, { useMemo } from 'react'; 
import { useLocation } from 'react-router';
import { useEffect, useState } from "react"; 
import queryString from 'query-string'; 
import { GameCollection } from './GameCollection'; 
import { GameCollectionItem } from './GameCollectionItem';
import { InfoVideojuegos } from './InfoVideojuegos';
import { useForm } from '../hooks/context/useForm';  
import { getGamesBySearch } from './getGamesBySearch';
import { GameCard } from './GameCard';
import { useNavigate } from 'react-router-dom'; 
 
export const BuscadorVideojuego = () => { 
 
     //Utilizamos el hook 'useLocation' para obtener la informació de la ubicación en la que 
    //se encuentra el usuario en la aplicación.  
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
 
    const navigate = useNavigate(); 
    const handleBusqueda = (e) => { 
        e.preventDefault(); 
        console.log(criterioBusqueda); 
        //Generamos el query string en la URL 
        navigate(`?busqueda=${criterioBusqueda}`); 
        
    } 

    const juegos = juegosFiltrados.map(juego => {
        return {
            id: juego.id,
            nombre: juego.name,
            imagen: juego.background_image,
            rating: juego.rating,
            metacritic: juego.metacritic
        }
    })


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
                                className="btn m-1 btn-block btn-outline-primary" 
                                > 
                            Buscar 
                        </button> 
                    </form> 
                </div> 
 
                <div className="col-7"> 
                    <h4>Resultado</h4> 
                    <br /> 
 
                    { 
                        (busqueda === '') 
                        && 
                        <div className="alert alert-info"> 
                            Indica el criterio de búsqueda... 
                        </div> 
                    } 
 
                    { 
                        (busqueda !== '' && juegosFiltrados.length === 0) 
                        && 
                        <div className="alert alert-danger"> 
                            No existe el juego: { busqueda } 
                        </div> 
                    } 

 
                    { 
                        //Recorremos el resultado de la búsqueda de los juegos. 
                        
                        <div className="d-flex flex-row">{
                            juegos.map(({nombre, imagen, rating, metacritic}) => (
                                <div className="p-2"> <Card name={nombre} background_image={imagen} rating ={rating} metacritic = {metacritic}/> </div>
                            ))
                        } </div>
                    } 
 
                </div> 
            </div> 
        </> 
    ) 

    function Card(Props){
        return(

            <div className="card">
                <div className="card-title">{Props.name}</div>  
                <div className="card-body">Rating: {Props.rating}</div>
                <div className="card-body">Metacritic: {Props.metacritic}</div>
            </div>
        )
    }
 
} 