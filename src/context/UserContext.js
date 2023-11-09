import React from "react";

// @function  UserContext
const UserContext = React.createContext({ username: '', auth: false });

// @function  UserProvider
// Create function to provide UserContext
const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ username: '', auth: false });
    const loginContext = (username, token) => {
        setUser((user) => ({
            username: username, auth: true
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