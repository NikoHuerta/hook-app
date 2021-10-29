import React, { useRef } from 'react';


import '../02-useEffect/effects.css';

export const FocusScreen = () => {
    
    const inputRef = useRef();
    
    const handleClick = () => {
        inputRef.current.select();
    };
    
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                className="form-control"
                placeholder="Su Nombre"
            />

            <button
                ref={ inputRef }
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>
            
        </div>
    );
}
