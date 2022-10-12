import React from 'react'; 
import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from "react-router-dom"; 
import { Navbar } from '../componentes/comunes/Navbar'; 
import { LoginScreen } from '../componentes/login/LoginScreen'; 
import { PsScreen } from '../componentes/ps/PsScreen'; 
 
export const MainAppRouter = () => { 
    return ( 
 
        <Router> 
            <div> 
                {/* 
                    Utilizamos el componente Navbar que creamos en el proyecto, el cual va contener las ligas 
                    por las que el usuario puede moverse detro de la aplicación.  
                */} 
                <Navbar /> 
 
                {/* 
                    Aquí configiramos las posibles rutas a las que podemos navegar en la aplicación. Cada Route indica
                    la url y el componente que debe renderizar.                     
                */} 
                <Routes> 
                    <Route exact path="/login" element={<LoginScreen/>} /> 
                    <Route exact path="/" element={<PsScreen/>} />           
                </Routes> 
            </div> 
        </Router> 
 
 
    ) 
}