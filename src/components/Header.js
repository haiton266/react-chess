import React, { useContext } from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import logoApp from '../assets/images/logo192.png';
import { toast } from 'react-toastify';
import { UserContext } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const { logout, user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        toast.success('Logout success!');
        navigate('/login');
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logoApp}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Chess logo"
                    />
                    Chess
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                     <FontAwesomeIcon icon={faBars} />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/Rules" className="nav-link">Rules</NavLink>
                        <NavLink to="/rank" className="nav-link">Ranking</NavLink>
                        {user && user.auth === true && (
                            <>
                                <NavLink to="/game" className="nav-link">Play Game</NavLink>
                                <NavLink to="/room" className="nav-link">My Room</NavLink>
                            </>
                        )}
                    </Nav>
                    <Nav>
                        {user && user.username && (
                            <span className='nav-link'>Welcome <b>{user.username}</b>!</span>
                        )}
                        {user && user.auth === true ? (
                            <NavLink to="/logout" className="nav-link" onClick={handleLogout}>Logout</NavLink>
                        ) : (
                            <>
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                                <NavLink to="/register" className="nav-link">Register</NavLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
