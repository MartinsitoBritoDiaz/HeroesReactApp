import { types } from "../../../src/auth/types/types"

describe('Test in "Types.ts"', () => { 
    test('should return these types', () => { 
        expect(types).toEqual( { login: '[Auth] Login', logout: '[Auth] Logout' })
    })
})