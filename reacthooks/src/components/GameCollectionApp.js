import React, { useEffect, useReducer} from "react";
import { GameCollection } from "./GameCollection";
import { GameCollectionAdd } from "./GameCollectionAdd";
import { GameCollectionReducer } from "./GameCollectionReducer";

//Creamos la función init que va utilizar el hook useReducer para inicializar su estado.
const init = () => {
    //Regresamos el contenido de localStorage como estado inicial. Si lo que obtenemos de localStorage regresa
    // null entonces regresamos un arreglo vacío [].
    return JSON.parse(localStorage.getItem("games")) || [];
};

export const GameCollectionApp = () => {
    const [gamesState, dispatch] = useReducer(GameCollectionReducer, [], init);

    useEffect(() => {
        //Debido a que en localStorage sólo se pueden guardar strings y no objetos, si queremos guarar un
        // JSON debemos convertirlo a string con JSON.stringify
        localStorage.setItem("games", JSON.stringify(gamesState));
    }, [gamesState]);

    //Este método nos va servir para agregar un nuevo TODO a la lista
    const handleNewGame = (nuevoJuego) => {
        //Creamos el action 'add' que se va enviar al reducer
        const action = {
            type: "add",
            payload: nuevoJuego,
        };
        //Utilizamos la variable dispatch que obtuvimos en la desestructuración de useReducer para
        // enviar la acción al reducer.
        dispatch(action);
    };

    //Dispara el evento 'delete' hacia el reducer para eliminar un elemento de la lista.
    const handleDeleteGame = (gameId) => {
        console.log(gameId);
        //Creamos el action 'delete' que se va enviar al reducer. En el payload es suficiente con que enviemos
        // el ID del todo a elminiar ya que en el reducer se utiliza en el filter para descartarlo de la lista.
        const action = {
            type: "delete",
            payload: gameId,
        };
        //Utilizamos la variable dispatch que obtuvimos en la desestructuración de useReducer para
        // enviar la acción al reducer.
        dispatch(action);
    };

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <br />
                    <h1 className="display-4">Colección de Juegos</h1>
                    <h2>
                        Número de juegos: {gamesState.length}
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-7">
                    <GameCollection
                        gamesState={gamesState}
                        handleDeleteGame={handleDeleteGame}
                    />
                </div>
                <div className="col-5">
                    <GameCollectionAdd handleNewGame={handleNewGame} />
                </div>
            </div>
        </>
    );
};