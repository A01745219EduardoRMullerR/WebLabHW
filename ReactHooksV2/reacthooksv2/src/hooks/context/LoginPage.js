import React, { useContext } from 'react'; 
import { UserContext } from './UserContext'; 
 
export const LoginPage = () => { 
 
    const { setUser } = useContext(UserContext); 
 
    return ( 
        <> 
            <h1>Login Page</h1> 
            <hr /> 
            <button 
                className="btn btn-secondary" 
                onClick={() => setUser( 
                    { 
                        id: 16, 
                        name: 'Eddu Muller', 
                        email: 'eddumullerr@maildrop.cc' 
                    } 
                )} 
            > 
                Login 
            </button> 
        </> 
    ) 
} 