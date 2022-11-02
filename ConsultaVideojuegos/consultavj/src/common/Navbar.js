import React, { useContext } from 'react'; 
//Con Link y NavLink vamos a poder navegar entre las diferentes páginas utilizando el Router de React. 
import { Link, NavLink } from 'react-router-dom'; 
import { LoginPage } from '../hooks/context/LoginPage';
import { UserContext } from '../hooks/context/UserContext';
 
export const Navbar = () => { 

    const {user, setUser} = useContext(UserContext);

    return( 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark"> 
            <Link className="navbar-brand" 
                  to="/videojuegos" 
            > 
                Gamebook 
            </Link> 
 
            <div className="navbar-collapse"> 
                <div className="navbar-nav"> 
                    {/*                         
                        La  propiedad  'to' sirve  para  indicar  el  route  al  que  nos vamos  a  dirigir  al  hacer clic  en  la  liga  y con  esto 
                        identifica qué componente 
                        va cargar para ser mostrado en la página. La propiedad 'exact' indica que debe ser la ruta exacta la que se 
                        tiene que indicar y enviar al Router. 
                    */} 
                    <NavLink 
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"} 
                        exact="true" 
                        to="/videojuegos" 
                    > 
                        Videojuegos 
                    </NavLink> 
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                        exact="true"
                        to="/miColeccion"
                    >
                        Mi Coleccion    
                    </NavLink>
 
                    
                </div> 
            </div> 
 
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2"> 
                <ul className="navbar-nav ml-auto"> 
                    <NavLink 
                        className={({ isActive }) => isActive ? "active" : "nav-item nav-link"} 
                        exact="true" 
                        to="/login" 
                    > 
                        Salir 
                    </NavLink> 
                </ul>
            </div> 
            <div className='navbar-collapse collapse w-101 order-3 dual-collapse2'>
                
                <h5 className='NavbarText'>Hola {JSON.stringify(user, null, 3)}</h5>
                <img
                alt=""
                src="..\..\public\profile-icon-1.png"
                width="30"
                height="30"/>

            </div>
        </nav> 
    ) 
} 