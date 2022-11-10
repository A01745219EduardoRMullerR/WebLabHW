import React, { useMemo } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import {useForm} from '../custom/useForm';
import { GameCard } from './GameCard';
import { getGamesBySearch } from './selectores/getGamesBySearch';

export const BuscadorScreen = () => {
    //Utilizamos el hook 'useLocation' para obtener la informació de la ubicación en la que
    //se encuentra el usuario en la aplicación.
    const location = useLocation();
    console.log("location.search: "+location.search);
    //Utilizamos la librería query-string para parsear el query string de la url.
    console.log(queryString.parse(location.search));
    //Desestructuramos la variable 'busqueda' del query string.
    const { busqueda = '' } = queryString.parse(location.search);
    console.log("busqueda: "+busqueda);
    const [formValues, handleInputChange] = useForm({
        criterioBusqueda: busqueda
    });
    const { criterioBusqueda } = formValues;
    //Utilizamos useMemo para memorizar la busqueda
    const juegosFiltrados = useMemo(() => getGamesBySearch(busqueda), [busqueda]);
    const navigate = useNavigate();
    const handleBusqueda = (e) => {
        e.preventDefault();
        console.log("criterio: "+criterioBusqueda);
        //Generamos el query string en la URL
        navigate(`?busqueda=${criterioBusqueda}`);
        console.log("juegos fintrados")
        console.log(juegosFiltrados)
    }
    return (
        <>
            <h1>Buscador</h1>
            <br />
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
                            spellcheck="false"
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
                            No existe el juego: {busqueda}
                        </div>
                    }
                    <ul className="card-group d-flex">
                    {
                        //Recorremos el resultado de la búsqueda de los juegos.
                        juegosFiltrados.map(juego => (
                            <GameCard key={juego.id}
                                juego={juego} />
                        ))
                    }
                    </ul>
                </div>
            </div>
        </>
    )
}