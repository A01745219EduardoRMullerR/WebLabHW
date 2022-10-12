import React from 'react'; 
import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from "react-router-dom"; 
import { Navbar } from '../componentes/comunes/Navbar'; 
import { LoginScreen } from '../componentes/login/LoginScreen'; 
import { PsScreen } from '../componentes/PsScreen'; 
import {XboxScreen} from '../componentes/XboxScreen';
import { GamesRouter } from './GamesRouter';
 
export const MainAppRouter = () => { 
    return ( 
 
        <Router> 
            <div> 
                <Routes> 
                    <Route exact path="/login" element={<LoginScreen/>} /> 
                    <Route 
                        path="*" 
                        element={<GamesRouter/>} 
                    />    
                </Routes> 
            </div> 
        </Router> 
    ) 
}