import React, { memo } from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = memo( ({ todos, handleDelete, handleToggle }) => {

    console.log('TodoList Render');

    return (
        <>
            <ul className="list-group list-group-flush">
            {
                todos.map( (todo, i) => ( 
                    <TodoListItem 
                        key={ todo.id } 
                        todo={ todo } 
                        index={ i } 
                        handleDelete={ handleDelete } 
                        handleToggle= { handleToggle } 
                    />
                    ))
            }
            </ul>
        </>
    )
}
)
