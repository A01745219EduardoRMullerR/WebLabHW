import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import { GameCollectionApp } from '../componentes/GameCollectionApp';
import { Navbar } from '../common/Navbar';
import { Videojuegos } from '../componentes/Videojuegos';
import { BuscadorScreen } from '../componentes/BuscadorScreen';

export const AppRouter = () => {
    return (
        <>
            <Navbar />

                <div>
                    <Routes>
                        <Route exact path="/videojuegos" element={<Videojuegos />} />
                        <Route exact path="/miColeccion" element={<GameCollectionApp />} />
                        <Route exact path="/Buscador" element={<BuscadorScreen />} />
                    </Routes>
                </div>
        </>
    )
}