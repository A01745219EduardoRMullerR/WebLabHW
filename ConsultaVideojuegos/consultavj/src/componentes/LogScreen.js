import React, { useContext, useState } from 'react';
import { UserContext } from '../hooks/context/UserContext';

 
export const LogScreen = () => { 

    const { user, setUser } = useContext(UserContext);

    const [stateLogs, setStateLogs] = useState([]);

    const logs = async function(){ 
        await fetch("http://localhost:8585/logsUser")
            .then((res) => res.json())
                .then((resJson) => JSON.stringify(resJson));
    }
    const getLog = async () => {

        let datos = {
            "user": user.user
        }

        console.log("dato user: " + JSON.stringify(datos));

        const url = 'http://localhost:8585/logsUser';
        //Utilizamos Fetch API para invocar la url. 
        const respuesta = await fetch(url, {
            method: "GET",
            body: JSON.stringify(datos),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        //Recuperamos el JSON de la respuesta, el cual contiene la información de los videojuegos. 
        const { results } = await respuesta.json();

        console.log("Result: " + JSON.stringify(results))
        //Obtenemos solamente la información que vamos a necesitar del json de la respuesta. 
        try{const logs = results.map(log => {
                return {
                    user: log.username,
                    event: log.evento,
                    date: log.fecha
                }
            })
            console.log("los logs: " + logs);
            setStateLogs(logs);

        } catch (err){
            console.log(err)
        }
    }
 
 
    return ( 
        <> 
            <h2>Logs:</h2>

            <ol className='list-group'>
                {getLog()}

            </ol>
            
 
        </> 
    ) 
} 