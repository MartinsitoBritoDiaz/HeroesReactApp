import { render, screen } from "@testing-library/react"
import { PublicRoute } from '../../src/router/PublicRoute';
import React from 'react'
import { AuthContext } from "../../src/auth/context";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Test for PublisRoute', () => { 
    test('should show the children component if is not authenticated', () => { 
        const contextValue = { logged: false }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Hello world</h1>
                </PublicRoute>
            </AuthContext.Provider>
         )

         screen.debug();
        
     });

     test('should navigate, if is authenticated', () => { 
        const contextValue = { 
            logged: true,
            user: {
                id: 'ABC2',
                name: 'Pinguilo'
            } 
            
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Hello world</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={ <h1>Page of Marvel</h1>}/>
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
         )

         expect( screen.getAllByText('Page of Marvel') ).toBeTruthy();
        
     });
});