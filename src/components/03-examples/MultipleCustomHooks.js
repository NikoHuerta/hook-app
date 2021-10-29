import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';


import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
    
    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0]; // !!data --> !null=true | !!null=false | !!data=true | true&&data[0]=data[0]

     //si no se encierra en un callback onClick(), la funcion toma como argumento el evento y no los parametros del hook y el evento no equivale al factor de input y explota

    
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                (loading) ?
                (
                    <div className="alert alert-info text-center">
                        Loading ...
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-end">
                    <p className="mb-0">{ quote }</p>
                    <br/>
                    <footer className="blockquote-footer"> { author } </footer>
                    </blockquote>
                )
            }

            <button 
            className="btn btn-primary" 
            onClick={ () => increment() }>
                Siguiente Quote
            </button>
        </div>
    )
}
