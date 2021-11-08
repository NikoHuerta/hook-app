import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from 'react-dom/test-utils';


describe('Pruebas en <TodoAdd />', () => {
    

    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd 
                        handleAddTodo={ handleAddTodo }
                        />);

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar la funcion handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });
    
    test('Debe de llamar la funcion handleAddTodo', () => {
       
        const wrapper = mount(<TodoAdd 
            handleAddTodo={ handleAddTodo }
            />);

        const value = 'Aprender NodeJS';
       
        wrapper.find('input').simulate('change', {
            target: {
                name: 'description',
                value
            } 
        });
       
        const formSubmit = wrapper.find('form').prop('onSubmit');
        
        formSubmit({ preventDefault(){} });
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        //expect(wrapper.find('input').prop('value')).toBe('');

    });
    
    
});
