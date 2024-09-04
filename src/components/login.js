import { useState, createContext, useContext } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({children}) => {

    const [loggedIn, setLoggedIn] = useState({
        AdminShow: false,
        DefaultShow: true
    })

    const RegLog = () => {
        setLoggedIn({
            AdminShow: false,
            DefaultShow: true
        })
    }

    const AdminLog = () => {
        setLoggedIn({
            AdminShow: true,
            DefaultShow: false
        })
    }

    return (       
        <LoginContext.Provider value={{ loggedIn, RegLog, AdminLog }} > {children} </LoginContext.Provider>
    )
}

export const useLoginContext = () => useContext(LoginContext);
  
export default LoginContext;