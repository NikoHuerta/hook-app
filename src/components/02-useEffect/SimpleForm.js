import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';


export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;
    
    
    useEffect( () => {
        // console.log('hey!');
    // }); //no importa que cambie, vuelve a ejecutar
    }, [] ); //solo una ves al cree el componente

    useEffect( () => {
        // console.log('formState cambio');
    }, [formState] ); //solo cuando formState cambia

    useEffect( () => {
        // console.log('email cambio');
    }, [email] ); //solo cuando email cambia

    
    const handleInputChange = ({target}) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        });

    };

    return (
        <>
        <h1>useEffect</h1>
        <hr/>

        <div className="form-group">
            <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Your name"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
            />
        </div>

        <div className="form-group">
            <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="email@domain.something"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
            />
        </div>

        {
            ( name === '123' ) && <Message />
        }


            
        </>
    )
}
