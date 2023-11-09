import React from 'react';
import { Container } from 'react-bootstrap';
import { PostCreate } from '../Services/chessBoardServices.js';
import ModalJoinRoom from './ModalJoinRoom'
const Room = () => {
    const [isShowModalJoinRoom, setIsShowModalJoinRoom] = React.useState(false);
    const handleClose = () => {
        setIsShowModalJoinRoom(false);
    }
    const createRoomApi = async () => {
        try {
            let res = await PostCreate("R2N2B2Q2K2B2N2R2P2P2P2P2P2P2P2P20000000000000000000000000000000000000000000000000000000000000000P1P1P1P1P1P1P1P1R1N1B1Q1K1B1N1R1", 1, "no", "no", "no", "0");

            if (res && res.data) {
                console.log(res.data.message)
                localStorage.setItem("p", 1);
                localStorage.setItem("idRoom", res.data.idRoom);
            }
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
                        <button class='btn btn-success mx-5'
                            onClick={() => { createRoomApi() }}
                        > Create your room</button>
                        <button class='btn btn-success'
                            onClick={() => { setIsShowModalJoinRoom(true) }}
                        > Join room</button>
                    </div>
                </div>
                <ModalJoinRoom
                    show={isShowModalJoinRoom} // cái có thể lấy ra từ prop
                    handleClose={handleClose}
                />
            </Container >
        </>
    );
}

export default Room;