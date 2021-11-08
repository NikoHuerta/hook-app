import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en <TodoListItem />', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    
    const wrapper = shallow( <TodoListItem 
                                todo={demoTodos[1]}
                                index={1}
                                handleDelete = { handleDelete }
                                handleToggle = { handleToggle }
                            />);

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar a la funcion Borrar', () => {
        expect(wrapper.find('p').hasClass('complete')).toBe(false);
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[1].id); 
    });

    test('Debe de llamar a la funcion Toggle', () => {
        expect(wrapper.find('p').hasClass('complete')).toBe(false);
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[1].id);
    });

    test('Debe de mostrar el texto correctamente', () => {
       expect(wrapper.find('p').hasClass('complete')).toBe(false);
       expect(wrapper.find('p').text()).toBe(`${1+1}. ${ demoTodos[1].desc }`);
    });

    test('Debe de tener la clase complete si el todo.done = true', () => {
        
        const todo = demoTodos[2];
        todo.done = true;

        const wrapper = shallow( <TodoListItem 
            todo={ todo }
        />);

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });
    
});
