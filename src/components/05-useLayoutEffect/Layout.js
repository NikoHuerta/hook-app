import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';


import './layout.css';

export const Layout = () => {
    
    const {counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0]; // !!data --> !null=true | !!null=false | !!data=true | true&&data[0]=data[0]

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => { //sacar mediciones o algo cambia despues que se renderiza el HTML
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

     //si no se encierra en un callback onClick(), la funcion toma como argumento el evento y no los parametros del hook y el evento no equivale al factor de input y explota

    
    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>
               
            <blockquote className="blockquote text-end">
                <p 
                    className="mb-0"
                    ref={ pTag }
                >
                    { quote }
                </p>
            </blockquote>
            
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button 
            className="btn btn-primary" 
            onClick={ () => increment() }>
                Siguiente Quote
            </button>
        </div>
    )
}
