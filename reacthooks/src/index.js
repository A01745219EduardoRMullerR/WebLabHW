 
import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
import { HookUseMemo } from './hooks/memo/HookUseMemo';
import { Memoriza } from './hooks/memo/Memoriza';
//import { Hooks } from './Hooks'; 
//import { Formulario } from './hooks/effect/Formulario';
//import { FocusScreen } from './hooks/ref/FocusScreen';
//import { Contador } from './hooks/state/Contador';
//import { ContadorConCustomHook } from './hooks/state/ContadorConCustomHook';
//import { MultipleCustomHooks } from './hooks/state/MultpleCustomHooks';
 
const container = document.getElementById('root'); 
 
const root = createRoot(container); 
 
root.render(<HookUseMemo />);