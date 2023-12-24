import Game from '../components/game';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import Rules from '../components/Rules';
import Room from '../components/Room';
import Login from '../components/Login';
import PrivateRoutes from "./PrivateRoutes";
import Register from '../components/Register';
import Rank from '../components/Rank';
import { io } from "socket.io-client";
import React, { useState, useEffect } from 'react';
import Tournament from '../components/tournament';
import AdminDashboard from '../components/AdminDashboard';
import withAdminAuth from '../components/withAdminAuth';
const AppRoutes = () => {
    const AdminDashboardWithAuth = withAdminAuth(AdminDashboard);
    const [socketInstance, setSocketInstance] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //     const socket = io("http://127.0.0.1:5001/", {
        //         transports: ["websocket"],
        //         cors: {
        //             origin: "http://localhost:3000/",
        //         },
        //     });

        //     setSocketInstance(socket);

        //     socket.on("connect", (data) => {
        //         console.log(data);
        //     });

        //     socket.on('connect', function () {
        //         socket.emit('get_time');
        //     });

        setLoading(false);

        //     socket.on("disconnect", (data) => {
        //         console.log(data);
        //     });

        //     return function cleanup() {
        //         socket.disconnect();
        //     };
    }, []);
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Rules" element={<Rules />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/rank" element={<Rank />} />
                <Route path='/tournament' element={<Tournament />} />
                <Route path='/admin' element={<AdminDashboardWithAuth />} />
                {/* <Route path="/game" element={<Room />} />
                <Route path="/room" element={<Game />} /> */}
                <Route
                    path="/game"
                    element={
                        <PrivateRoutes>
                            {/* <Game /> */}
                            {!loading && <Game socket={socketInstance} />}
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