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
        const url = 'https://api.rawg.io/api/games?key=4a01421ec4d5488d910ed0319522a1b1&genres=action';
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
        <ol className="list-group"></ol>
            {
                infoJuegos.map(({nombre, imagen}) => (
                    <Card name={nombre} background_image={imagen}/> 
                ))
            } 
        </>
    )

    function Card(Props){
        return(
            <div className="card">
                <div className="card-body">{Props.name}</div>
                <img src="{Props.background_image}"/>
            </div>
        )
    }
}