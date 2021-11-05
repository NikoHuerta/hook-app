import React from 'react';
import { shallow } from 'enzyme';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';

import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en todoReducer', () => {

    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });
    
    test('Debe de agregar un TODO', () => {

        const newTodo = {
            id: 4,
            desc: 'Aprender NodeJS',
            done: false
        };

        const action = {
            type : 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action);
        expect(state.length).toEqual(demoTodos.length + 1); //igualar tamaño de arreglo
        expect(state).toEqual([...demoTodos, newTodo]);    
    });
    

});
