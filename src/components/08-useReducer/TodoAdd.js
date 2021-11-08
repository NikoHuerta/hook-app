import React, { memo } from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = memo( ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(description.trim().length <= 1){
            return ;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo( newTodo );
        reset();
    };

    console.log('TodoAdd Render');

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    name="description"
                    placeholder="Aprender ..."
                    autoComplete="off"
                    className="form-control"
                    onChange={ handleInputChange }
                    value={ description }
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
)


TodoAdd.displayName='TodoAdd';