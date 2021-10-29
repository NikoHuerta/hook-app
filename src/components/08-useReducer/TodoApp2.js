import React, { useCallback, useEffect, useReducer } from 'react';
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('todos') ) || [];
}


export const TodoApp2 = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]); //si TODOs cambian, hay que grabar en localstorage


    const handleDelete = useCallback( (todoId) => {

        dispatch({
            type: 'delete',
            payload: todoId
        });

    },[dispatch]);

    const handleToggle = useCallback( (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });

    },[dispatch]);

    const handleAddTodo = useCallback( ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }, [dispatch]);


    return (
        <div>
            <h1>TodoApp2 ( { todos.length } ) </h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    
                    <TodoList 
                        todos={ todos } 
                        handleDelete={ handleDelete } 
                        handleToggle={ handleToggle }
                    />

                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>

        </div>
    )
}
