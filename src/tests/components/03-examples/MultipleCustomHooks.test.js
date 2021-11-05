import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
    
    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
    });
    

    test('Debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la información ', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Nicolas',
                quote: 'Hola Nico'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect(wrapper.find('.alert').exists()).toBe(false);//buscar si existe en el wrapper la clase alert
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Nico');
        expect(wrapper.find('footer').text().trim()).toBe('Nicolas');
        //console.log(wrapper.html());

    })
    
    
})
