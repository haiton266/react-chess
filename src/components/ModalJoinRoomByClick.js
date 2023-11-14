import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { PutCreate } from '../Services/chessBoardServices.js';
import { useNavigate } from 'react-router-dom';

const ModalJoinRoomByClick = (props) => {
    const navigate = useNavigate();
    const { show, handleClose, idRoom } = props;
    const [codeGame, setCodeGame] = useState();
    const joinRoomApi = async () => {
        try {
            let res = await PutCreate(idRoom, localStorage.getItem("username"), codeGame);
            localStorage.setItem("p", 2);
            localStorage.setItem("idRoom", idRoom);
            handleClose();
            navigate('/game');
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Room {idRoom}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <form>
                            <div className="form-group">
                                <label>Please enter code game to join this room</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    onChange={(event) => setCodeGame(event.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => joinRoomApi()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalJoinRoomByClick;

