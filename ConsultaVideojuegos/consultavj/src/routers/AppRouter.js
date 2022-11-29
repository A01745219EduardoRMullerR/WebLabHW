import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import { GameCollectionApp } from '../componentes/GameCollectionApp';
import { Navbar } from '../common/Navbar';
import { Videojuegos } from '../componentes/Videojuegos';
//import { BuscadorVj } from '../componentes/BuscadorVj';
//import {BuscadorVideojuego} from '../componentes/BuscadorVideojuego';
import { BuscadorVideojuego } from '../componentes/BuscadorVideojuego';
import { LogScreen } from '../componentes/LogScreen';

export const AppRouter = () => {
    return (
        <>
            <Navbar />
                <div>
                    <Routes>
                        <Route exact path="/videojuegos" element={<Videojuegos />} />
                        <Route exact path="/miColeccion" element={<GameCollectionApp />} />
                        <Route exact path="/buscar" element={<BuscadorVideojuego />} /> 
                        <Route exact path="/logs" element={<LogScreen />} />
                    </Routes>
                </div>
        </>
    )
}