import React from 'react';
import { Container } from 'react-bootstrap';
import ModalJoinRoom from './ModalJoinRoom'
import ModalCreateRoom from './ModalCreateRoom'
import { PostCreate } from '../Services/chessBoardServices.js';
import { useNavigate } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import CardListComponent from './CardListComponent.js';
import GridExample from './GridExample.js';

const Room = () => {
    const navigate = useNavigate();
    const [isShowModalJoinRoom, setIsShowModalJoinRoom] = React.useState(false);
    const [isShowModalCreateRoom, setIsShowModalCreateRoom] = React.useState(false);
    const handleClose = () => {
        setIsShowModalJoinRoom(false);
        setIsShowModalCreateRoom(false);
    }

    const playAI = async () => {
        try {
            let username = localStorage.getItem("username");
            let res = await PostCreate("R2N2B2Q2K2B2N2R2P2P2P2P2P2P2P2P20000000000000000000000000000000000000000000000000000000000000000P1P1P1P1P1P1P1P1R1N1B1Q1K1B1N1R1", 1, "no_need", username, "AI", "0");

            if (res && res.data) {
                console.log(res.data.message)
                localStorage.setItem("p", 1);
                localStorage.setItem("idRoom", res.data.idRoom);
                localStorage.setItem("player2", "AI");
            }
            handleClose();
            navigate('/game');
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Container>
                <div class='my-3 d-flex justify-content-between'>
                    <span><b>Current Room</b></span>
                    <div class='d-flex'>
                        <button class='btn btn-warning mx-5'
                            onClick={async () => await playAI()}
                        > Play with AI</button>
                        <button class='btn btn-warning mx-5'
                            onClick={() => { setIsShowModalCreateRoom(true) }}
                        > Create your room</button>
                        <button class='btn btn-warning'
                            onClick={() => { setIsShowModalJoinRoom(true) }}
                        > Join room</button>
                    </div>
                </div>
                <ModalCreateRoom
                    show={isShowModalCreateRoom} // cái có thể lấy ra từ prop
                    handleClose={handleClose}
                />
                <ModalJoinRoom
                    show={isShowModalJoinRoom}
                    handleClose={handleClose}
                />

                <CardListComponent />
            </Container >
        </>
    );
}

export default Room;