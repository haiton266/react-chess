import React from "react";

// @function  UserContext
const AdminContext = React.createContext({ username: '', auth: false });

// @function  UserProvider
// Create function to provide UserContext
const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = React.useState({ username: '', auth: false });
    const adminContext = (username, token) => {
        setAdmin((admin) => ({
            username: username, auth: true
        }));
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setAdmin((admin) => ({
            username: '', auth: false
        }));
        localStorage.removeItem('username');
        localStorage.removeItem('token');
    };

    return (
        <AdminContext.Provider value={{ admin, adminContext, logout }}>
            {children}
        </AdminContext.Provider>
    );
};

export { AdminContext, AdminProvider };