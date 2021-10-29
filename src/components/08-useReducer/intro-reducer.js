
const initialState = [{
    id:1,
    todo:'Comprar pan',
    done: false
}];  //estado inicial


const todoReducer = (state = initialState, action) => {
    
    if(action?.type === 'agregar'){  //si la accion tiene un tipo, sino, no hacer nada
        return [...state, action.payload];
    }

    return state;
}; //reducer , accion es la que modifica el state


let todos = todoReducer(); //inicializacion

const newTodo = {
    id:2,
    todo:'Comprar leche',
    done: false
}


const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction); //accion se manda al reducer


console.log(todos);