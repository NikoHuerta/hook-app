import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Nicolas Huerta',
        email: 'nhuertaf@protonmail.com'
    };

    test('Debe de regresar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [values, handleInputChange, reset] = result.current;
        
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
        
    });

    test('Debe de cambiar el valor de un campo del formulario', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange] = result.current;
        
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'juanito'
                }
            });
        });

        const[formValue , , ] = result.current;
        expect(formValue).toEqual({ ...initialForm, name: 'juanito'});

    });

    test('Debe de reestablecer el formulario a sus valores por defecto', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target:{
                    name: 'email',
                    value: 'juanito@protonmail.com'
                }
            });
            reset();
        });

        const [formValue , , ] = result.current;
        expect(formValue).toEqual(initialForm);
        

    });

});
