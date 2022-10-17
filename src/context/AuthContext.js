import {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({})

function AuthContextProvider({children}){
    const [isAuth, toggleIsAuth] = useState(false)
    const history = useHistory();

    function login(){
        console.log('gebruiker is ingelogd')
        toggleIsAuth(true)
        history.push('/profile')
    }
    function logout(){
        console.log('gebruiker is uitgelogd')
        toggleIsAuth(false)
        history.push('/')

    }

    const contextData = {
        isAuth: isAuth,
        login: login,
        logout: logout

    };

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>

    )

}
export default AuthContextProvider;