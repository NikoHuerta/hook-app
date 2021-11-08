import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { TodoApp2 } from "../../../components/08-useReducer/TodoApp2";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoApp2 />', () => {
    
    const wrapper = shallow(<TodoApp2 />);
    Storage.prototype.setItem = jest.fn( () => {} );

    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de agregar un TODO ', () => {

        const wrapper = mount( <TodoApp2 /> );
        //console.log(wrapper.find('TodoAdd').html());
        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp2 ( 2 )');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('Debe de eliminar un TODO', () => {
        
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        })
        
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp2 ( 0 )');
    });
    

    
    
    

});
