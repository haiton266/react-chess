import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Delete } from '../Services/chessBoardServices.js';
import { useNavigate } from 'react-router-dom';

const ModalJoinWinner = (props) => {
    const navigate = useNavigate();
    const { show, handleClose, dataWinner } = props;
    const deleteRoomApi = async () => {
        try {
            handleClose();
            navigate('/');
            let idRoom = localStorage.getItem("idRoom");
            let res = await Delete(idRoom);
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Result</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <span>Winner: {dataWinner}</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => deleteRoomApi()}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalJoinWinner;

