import React from 'react';
import { Container } from 'react-bootstrap';
import ModalJoinRoom from './ModalJoinRoom'
import ModalCreateRoom from './ModalCreateRoom'
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
    const [isShowModalJoinRoom, setIsShowModalJoinRoom] = React.useState(false);
    const [isShowModalCreateRoom, setIsShowModalCreateRoom] = React.useState(false);
    const handleClose = () => {
        setIsShowModalJoinRoom(false);
        setIsShowModalCreateRoom(false);
    }


    return (
        <>
            <Container>
                <div class='my-3 d-flex justify-content-between'>
                    <span><b>Current Room</b></span>
                    <div class='d-flex'>
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