import { render, screen } from "@testing-library/react"
import { PrivateRoute } from '../../src/router/PrivateRoute';
import React from 'react'
import { AuthContext } from "../../src/auth/context";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Test for PrivateRoute', () => { 
    test('should show the children component, if is authenticated', () => { 
        Storage.prototype.setItem = jest.fn();

        const contextValue = { 
            logged: true,
            user: {
                id: 'ABC2',
                name: 'Pinguilo'
            } 
            
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Hello world</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
         )

        expect( screen.getByText('Hello world')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');
        
     });

    //  test('should navigate, if is authenticated', () => { 
        // const contextValue = { 
        //     logged: true,
        //     user: {
        //         id: 'ABC2',
        //         name: 'Pinguilo'
        //     } 
            
        // }

    //     render( 
    //         <AuthContext.Provider value={ contextValue }>
    //             <MemoryRouter initialEntries={['/login']}>
    //                 <Routes>
    //                     <Route path='login' element={
    //                         <PublicRoute>
    //                             <h1>Hello world</h1>
    //                         </PublicRoute>
    //                     } />
    //                     <Route path='marvel' element={ <h1>Page of Marvel</h1>}/>
    //                 </Routes>

    //             </MemoryRouter>
    //         </AuthContext.Provider>
    //      )

    //      expect( screen.getAllByText('Page of Marvel') ).toBeTruthy();
        
    //  });
});