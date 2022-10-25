import React from "react";
import { useFetch } from "../custom/useFetch";
import { useForm } from "../custom/useForm";


export const GameCollectionAdd = ({ handleNewGame }) => {
    const [{ gameId }, handleInputChange, reset] = useForm({
        gameId: "",
    });

    const url = `https://api.rawg.io/api/games/${encodeURI(gameId)}?key=4cecaefefe7240269e48d95dbcf5a14c`;

    const { info } = useFetch(url);

    const handleAddGame = (e) => {
        //Validamos que el id tenga información
        if (gameId.trim().length === 0) {
            return;
        }

        //Creamos el nuevo Juego
        const nuevoJuego = {
            id: new Date().getTime(),
            juego: info,
        };

        //Creamos el nuevo juego
        handleNewGame(nuevoJuego);

        //Reseteamos los valores del formulario.
        reset();
    };

    return (
        <>
            <h4>Agrega juegos a tu colección</h4>
            <hr />
            <form onSubmit={handleAddGame}>
                <input
                    type="text"
                    name="gameId"
                    className="form-control"
                    placeholder="Ingresa el id del juego ..."
                    autoComplete="off"
                    value={gameId}
                    onChange={handleInputChange}
                />
                <br />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar juego
                </button>
            </form>
        </>
    );
};