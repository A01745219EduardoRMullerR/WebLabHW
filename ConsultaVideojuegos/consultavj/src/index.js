import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
import './index.css'; 
import { AppRouter } from './routers/AppRouter';
import { VideojuegosApp } from './VideojuegosApp';
 
//import { VideojuegosApp } from './VideojuegosApp'; 
 
const container = document.getElementById('root'); 
const root = createRoot(container); 
root.render(<VideojuegosApp />);