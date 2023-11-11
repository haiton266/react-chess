import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModalJoinWinner = (props) => {
    const navigate = useNavigate();
    const { show, handleClose, dataWinner } = props;
    const subOK = () => {
        navigate('/');
        handleClose();
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
                    <Button variant="primary" onClick={() => subOK()}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalJoinWinner;

