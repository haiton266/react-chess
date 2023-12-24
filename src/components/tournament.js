import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Bracket, Seed, SeedItem, SeedTeam } from 'react-brackets';
import { getTournamentData } from '../Services/chessBoardServices';
import { useNavigate } from 'react-router-dom';
import ModalCreateTournament from './ModalCreateTournament.js';
import { UserContext } from '../context/UserContext';
// Hàm gọi API để lấy dữ liệu
const fetchTournamentData = async () => {
    try {
        const response = await getTournamentData();
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

// Component Seed tùy chỉnh
const renderSeed = ({ seed, breakpoint, firstSeedId, navigate }) => {
    const handleMatchClick = () => {
        if (localStorage.getItem("username") === seed.teams[0]?.name) {
            console.log('Đã chọn trận đấu:', seed);
            localStorage.setItem("p", 1);
            console.log("idRoom", seed.matchID);
            localStorage.setItem("idRoom", seed.matchID);
            localStorage.setItem("player2", "people");
            navigate('/game');
        }
        else if (localStorage.getItem("username") === seed.teams[1]?.name) {
            console.log('Đã chọn trận đấu:', seed);
            localStorage.setItem("p", 2);
            localStorage.setItem("idRoom", seed.matchID);
            localStorage.setItem("player2", "people");
            navigate('/game');
        }
        else {
            console.log("Không được chọn")
        }
    };

    // Tính toán ID mới cho seed
    const adjustedSeedId = seed.id - firstSeedId + 1;

    return (
        <Seed mobileBreakpoint={breakpoint} onClick={handleMatchClick}>
            <div> <b>Match {adjustedSeedId}</b></div>
            <SeedItem>
                <SeedTeam>{seed.teams[0]?.name || 'TBD'} </SeedTeam>
                <SeedTeam>{seed.teams[1]?.name || 'TBD'} </SeedTeam>
            </SeedItem>
            <div>Result: {seed.result}</div>
        </Seed>
    );
};

// Component chính
const Tournament = () => {
    const { setUser, logout, user } = useContext(UserContext);
    const [rounds, setRounds] = useState([]);
    const navigate = useNavigate(); // Di chuyển việc sử dụng hook vào đây
    const [isShowModalCreateTournament, setIsShowModalCreateTournament] = useState(false);
    const handleClose = () => {
        setIsShowModalCreateTournament(false);
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTournamentData();
            if (data) {
                setRounds(data);
            }
        };

        fetchData();
    }, []);

    // Tính toán firstSeedId từ rounds đầu tiên
    const firstSeedId = rounds.length > 0 && rounds[0].seeds.length > 0
        ? rounds[0].seeds[0].id
        : 0;
    return (
        <Container>
            <div class='my-3 d-flex justify-content-between'>
                <span><b>Current Tournament</b></span>
                {user && user.isAdmin === true && (
                <div class='d-flex'>
                    <button class='btn btn-warning mx-5'
                        onClick={() => setIsShowModalCreateTournament(true)}
                    > Create new tournament</button>
                </div>
                )}
            </div>
            <div className='p-5'>
                {rounds.length ? (
                    <Bracket
                        rounds={rounds}
                        renderSeedComponent={(props) =>
                            renderSeed({ ...props, firstSeedId, navigate })
                        }
                    />
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <ModalCreateTournament
                show={isShowModalCreateTournament} // cái có thể lấy ra từ prop
                handleClose={handleClose}
            />
        </Container>
    );
};

export default Tournament;
