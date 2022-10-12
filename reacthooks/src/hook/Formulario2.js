import React, { useEffect, useState } from 'react';
import { useForm } from '../../custom/useForm';
import { Mensaje } from '../Mensaje';


export const Formulario = () => {
    const [state, handleInputChange] = useForm({
        nombre: '', email: ''
    });

    const { nombre, email } = state;    //custom hook. 
    return (
        <>
            <br><center>Hook</center></br>
            <hr />
            { }
            <div class="form-group">
                <label class="form-label" for=""><font color="red">1</font></label>
                <input type="text" name="Name" placeholder="nombre" id="nombreConsola" className="form-control" value={nombre}
                    onChange={handleInputChange} /> </div>
            <div class="form-group">
            <label class="form-label" for=""><font color="red"></font></label>
            <input type="text" name="email" placeholder="email" className="form-control" value={email}
                onChange={handleInputChange}/> </div>
            { (nombre === 'Carlos') && <Mensaje /> }
        </>
    )
}