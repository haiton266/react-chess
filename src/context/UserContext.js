import React from "react";
import { jwtDecode as jwt_decode } from 'jwt-decode';

// @function  UserContext
const UserContext = React.createContext({ username: '', auth: false, isAdmin: false });

// @function  UserProvider
// Create function to provide UserContext
const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ username: '', auth: false, isAdmin: false });
    const loginContext = (username, token) => {
        const decodedToken = jwt_decode(token);
        if (decodedToken.sub === 1)
            setUser((user) => ({
                username: username, auth: true, isAdmin: true
            }));
        else
            setUser((user) => ({
                username: username, auth: true, isAdmin: false
            }));
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setUser((user) => ({
            username: '', auth: false
        }));
        localStorage.removeItem('username');
        localStorage.removeItem('token');
    };

    return (
        <UserContext.Provider value={{ user, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };