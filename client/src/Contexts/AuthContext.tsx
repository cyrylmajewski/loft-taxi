import React, { createContext, useState } from "react";

export interface IAuthContext {
    isLoggedIn: boolean;
    logIn: Function;
    logOut: Function;
};

type AppProps = {
    children: JSX.Element
};

export const AuthContext = createContext<Partial<IAuthContext>>({});

export const AuthProvider = ({ children }: AppProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const logIn = (email: string, password: string) => {
        if(email !== 'valid@mail.com' || password !== 'correctpass') {
            return;
        }

        setIsLoggedIn(true);
    };

    const logOut = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const withAuth = (WrappedComponent: React.ElementType) => {
    return (props: JSX.IntrinsicAttributes) => {
        return (
            <AuthContext.Consumer>
                { (value) => <WrappedComponent {...value} {...props} /> }
            </AuthContext.Consumer>
        );
    }
}