import { useState } from 'react';

export const useCounter = (initialState = 10) => {
    
    const [counter, setCounter] = useState(initialState);

    const increment = (factor = 1) => {
<<<<<<< Updated upstream
        //setCounter(counter + factor);
        setCounter(counter => counter + factor);
    };

    const decrement = (factor = 1) => {
        //setCounter(counter - factor);
        setCounter(counter => counter - factor);
=======
        setCounter(counter + factor);
    };

    const decrement = (factor = 1) => {
        setCounter(counter - factor);
>>>>>>> Stashed changes
    };

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
