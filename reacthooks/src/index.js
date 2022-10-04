import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
import { TodoApp } from './hooks/reducer/TodoApp'; 
import { GameCollectionApp } from './components/GameCollectionApp';
// import { HookCallback } from './hooks/memo/HookCallBack'; 
// import { HookUseMemo } from './hooks/memo/HookUseMemo'; 
// import { Memoriza } from './hooks/memo/Memoriza'; 
// import { UseRefMultipleCustomHooks } from './hooks/ref/UseRefMultipleCustomHooks'; 
// import { FocusScreen } from './hooks/ref/FocusScreen'; 
// import { MultipleCustomHooks } from './hooks/MultipleCustomHooks'; 
// import { Formulario } from './hooks/effect/formulario'; 
// import { Contador } from './hooks/state/Contador'; 
// import { ContadorConCustomHook } from './hooks/state/ContadorConCustomHook'; 
 
const container = document.getElementById('root'); 
 
const root = createRoot(container); 
 
root.render(<GameCollectionApp />); 
 
// import('./hooks/reducer/intro-reducer'); 