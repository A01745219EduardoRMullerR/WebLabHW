import { useState } from 'react';

export const useContador = (initialState = 7) => {
    const [state, setState] = useState(initialState);
    const increment = (factor = factor+1) => {
        setState(state + factor);
    }
    const decrement = (factor = factor-1) => {
        setState(state - factor);
    }

    const reboot = () => {
        setState(initialState);
    }
    return {
        state,increment,decrement,reboot
    }
}
