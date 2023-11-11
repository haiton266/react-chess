import Game from '../components/game';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import Room from '../components/Room';
import Login from '../components/Login';
import PrivateRoutes from "./PrivateRoutes";
import Register from '../components/Register';
import Rank from '../components/Rank';
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/rank" element={<Rank />} />
                {/* <Route path="/game" element={<Room />} />
                <Route path="/room" element={<Game />} /> */}
                <Route
                    path="/game"
                    element={
                        <PrivateRoutes>
                            <Game />
                        </PrivateRoutes>}
                />
                <Route
                    path="/room"
                    element={
                        <PrivateRoutes>
                            <Room />
                        </PrivateRoutes>}
                />
            </Routes>
        </>
    )
}
export default AppRoutes;