import './App.scss';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import AppRoutes from './routes/AppRoutes';
import { UserContext } from './context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

function App() {
    const navigate = useNavigate();
    const { user, loginContext } = useContext(UserContext);

    useEffect(() => {
        let token = localStorage.getItem('token');
        console.log('token 1');
        if (token) {
            console.log('token 2');
            navigate('/');
            loginContext(localStorage.getItem('username'), localStorage.getItem('token'));
        }
    }, [])
    return (
        <>
            <div className="app-container">
                <Header />
                <AppRoutes />
            </div>
        </>
    );
}

export default App;

