import React from "react";
import { useEffect, useState } from "react";
import { ResultadoVideojuegos } from "./ResultadoVideojuegos";

export const InfoVideojuegos = () =>{

    useEffect(() => {
        getVideojuegos();
    }, [])

    const [infoJuegos, setInfoJuegos] = useState([]);

    const getVideojuegos = async () => {
        //URL del api de RAWG que validamos en postman 
        const url = 'https://api.rawg.io/api/games?key=1d1f0a311f094ba3af26503c85757806&genres=action';
        //Utilizamos Fetch API para invocar la url. 
        const respuesta = await fetch(url);
        //Recuperamos el JSON de la respuesta, el cual contiene la información de los videojuegos. 
        const { results } = await respuesta.json();
        //Obtenemos solamente la información que vamos a necesitar del json de la respuesta. 
        const juegos = results.map(juego => {
            return {
                id: juego.id,
                nombre: juego.name,
                imagen: juego.background_image,
                rating: juego.rating,
                metacritic: juego.metacritic
            }
        })
        setInfoJuegos(juegos)
    }

    return(
        <>
        <div  class="d-flex flex-wrap">
            <div className="d-flex flex-row">{
                infoJuegos.map(({nombre, imagen, rating, metacritic}) => (
                    <div class="p-2"> <Card name={nombre} background_image={imagen} rating ={rating} metacritic = {metacritic}/> </div>
                ))
            } </div>
            </div>
            
        </>
    )

    function Card(Props){
        return(

            <div className="card">
                <img class="w-100 h-100"  src={Props.background_image}/>
                <div className="card-title">{Props.name}</div>  
                <div className="card-body">Rating: {Props.rating}</div>
                <div className="card-body">Metacritic: {Props.metacritic}</div>
            </div>
        )
    }
}