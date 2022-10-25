import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import { GameCollectionApp } from '../componentes/GameCollectionApp';
import { Navbar } from '../common/Navbar';
import {VideojuegosApp} from '../VideojuegosApp'
import { Videojuegos } from '../componentes/Videojuegos';

export const AppRouter = () => {
    return (
        <>
            <Navbar />

                <div>
                    <Routes>
                        <Route exact path="/videojuegos" element={<Videojuegos />} />
                        <Route exact path="/miColeccion" element={<GameCollectionApp />} />
                    </Routes>
                </div>
        </>
    )
}