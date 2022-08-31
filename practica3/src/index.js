import React from 'react'; 
import ReactDOM from 'react-dom'; 
import VideojuegosApp from './VideojuegosApp'; 
import './index.css'; 
 
const divRoot = document.querySelector('#root'); 
 
//Utilizamos un prop 'nombre' para enviar información al componente 
// VideojuegosApp 
ReactDOM.render(<VideojuegosApp nombre='CHAD' />, divRoot); 