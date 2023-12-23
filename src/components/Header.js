import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import logoApp from '../assets/images/logo192.png';
import { toast } from 'react-toastify';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

function Header() {
    const { logout, user } = useContext(UserContext);

    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        console.log(user);
        toast.success('Logout success!');
        navigate('/login');
    }
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logoApp}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <span>Chess</span>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/Rules" className="nav-link">Rules</NavLink>

                            <NavLink to="/rank" className="nav-link">Ranking</NavLink>
                            {user && user.auth == true ? <>
                                <NavLink to="/game" className="nav-link">Play game</NavLink>
                                <NavLink to="/room" className="nav-link">My Room</NavLink>
                                <NavLink to="/tournament" className="nav-link">Tournament</NavLink>
                            </>
                                : ''}
                        </Nav>
                        <Nav >
                            {user && user.username ? <span class='nav-link'>
                                Welcome
                                <b> {user.username} </b>!
                            </span> : ''}
                            {user && user.auth == true ?
                                <NavLink to="/logout" className="nav-link" onClick={() => handleLogout()} > Logout</NavLink> :
                                <>
                                    <NavLink to="/login" className="nav-link">Login</NavLink>
                                    <NavLink to="/register" className="nav-link">Register</NavLink>
                                </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
}

export default Header;
