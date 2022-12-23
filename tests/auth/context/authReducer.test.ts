import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('Test for authReducer', () => {
    test('Should return the state by default', () => {
        const state = authReducer({ logged: false } , {type: types.logout, payload: { id: "ABC", name: "martinsito"} });
        expect( state ).toEqual({ logged: false } );
    })

    test('Should call the login auth and set the logged value on true', () => {
        const action = {
            type: types.login, 
            payload: { id: "1", name: "mark"} 
        }

        const state = authReducer({ logged: false } , action);
        expect( state ).toEqual({ 
            logged: true,
            user: action.payload 
        });

    })

    test('Should call the logout auth and delete the name of the user, also set the logged value on false', () => {
        const state = {
            logged: false,
            user: { id: '1', name: 'mark'}
        }

        const action = {
            type: types.logout, 
            payload: { id: "1", name: "mark"} 
        }

        const newState = authReducer(state , action);
        expect( newState ).toEqual({ 
            logged: false,
        });

    })

});