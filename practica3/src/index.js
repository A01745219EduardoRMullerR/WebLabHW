import React from 'react'; 
import ReactDOM from 'react-dom'; 
 
const titulo = <h1>Mis Videojuegos</h1>; 
 
const divRoot = document.querySelector('#root'); 
 
//Injectamos el JSX de la variable titulo al divRoot utilizando ReactDOM 
ReactDOM.render(titulo, divRoot); 