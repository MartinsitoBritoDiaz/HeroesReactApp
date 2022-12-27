import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { AppRouter } from '../../src/router/AppRouter'
import React from 'react'
 

describe('Test for <AppRouter />', () => { 
    test('should show the login component whethre is not authenticated', () => { 
        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter /> 
                </AuthContext.Provider>
            </MemoryRouter>
        )
        
    })
})