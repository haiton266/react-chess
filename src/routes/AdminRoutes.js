import { Routes, Route } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { Alert } from 'react-bootstrap';

const AdminRoutes = (props) => {
    const { user } = useContext(UserContext);
    if (user && !user.isAdmin)
        return (
            <>
                <Alert severity="error">
                    You don't have permission to access this page
                </Alert>
            </>)
    return (
        <>
            {props.children}
        </>
    )
}

export default AdminRoutes;