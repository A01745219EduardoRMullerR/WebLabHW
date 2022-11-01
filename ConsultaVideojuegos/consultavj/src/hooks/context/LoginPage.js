import React, { useContext, useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import {UserContext} from './UserContext'
 
export const LoginPage = () => { 
 
    const { setUser } = useContext(UserContext); 

    const [formState, setFormState] = useState({
        nombre: '',
        email: ''
    });
    const {nombre, email} = formState;
    const handleInputChange = (e) => {
        //console.log(e.target.name);
        //console.log(e.target.value);
        //Actualizamos el estado del formulario.
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();
    
    const doLogin = () => {
        setUser({
            name: "Eddu"
        })
        console.log("Se hizo login");
        console.log(UserContext.name);
        navigate("/videojuegos");
        
    }
 
    return ( 
        <> 
            <div class="center">
                <h1>Welcome!! :D</h1> 

                <h3>Login Information</h3>
                <br /> 
                <div className="form-group">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Nombre"
                        autoComplete="off"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Correo Electrónico"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                {(nombre == 'Eddu' && email == 'edumullerr@maildrop.cc') && <button 
                    className="btn btn-primary" 
                    onClick={() => doLogin() }
                > 
                    Login 
                </button> }
            </div>
        </> 
    ) 
} 