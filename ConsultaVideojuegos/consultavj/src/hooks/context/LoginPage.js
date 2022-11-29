import React, { createContext, useContext, useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import {UserContext} from './UserContext'

const MongoClient = require('mongodb').MongoClient; 
const url = "mongodb://127.0.0.1:27017"; 
const dbName = 'portalVideojuegos'; 
 
export const LoginPage = () => { 
 
    const { setUser } = useContext(UserContext); 

    const [formState, setFormState] = useState({
        nombre: '',
        email: ''
    });
    const {email, password} = formState;
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
    
    const doLogin = (req, res) => {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
            if (err) { 
                throw err; 
            } 
     
            const database = mdbclient.db(dbName); 
     
            // Referencia a la coleccion 
            const users = database.collection("users"); 
    
            var correoElectronico = req.body.correo;
            var contraseña = req.body.password;
     
            // Consulta sin filtros 
            const query = {email: correoElectronico, password: contraseña}; 
     
     
            // Hacemos la consulta 
           const user = await users.findOne(query);
           navigate("/videojuegos");
           console.log("Consulta por correo");
           res.end(JSON.stringify(user))
        });
        
        setUser({
            id: 1,
            correoElectronico: email,
            contraseña: password
        });
        
    }
 
    return ( 
        <> 
            <div className="center">
                <h1>Welcome!! :D</h1> 

                <h3>Login Information</h3>
                <br /> 
                <div className="form-group">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Correo"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Contraseña"
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <button 
                    className="btn btn-primary" 
                    onClick={() => doLogin()}
                > 
                    Login 
                </button>
            </div>
        </> 
    ) 
} 