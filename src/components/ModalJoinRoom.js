import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { PutCreate } from '../Services/chessBoardServices.js';
import { useNavigate } from 'react-router-dom';

const ModalJoinRoom = (props) => {
    const navigate = useNavigate();
    const { show, handleClose } = props;
    const [IdRoom, setIdRoom] = useState();
    const [codeGame, setCodeGame] = useState();
    const joinRoomApi = async () => {
        try {
            let res = await PutCreate(IdRoom, localStorage.getItem("username"), codeGame);
            localStorage.setItem("p", 2);
            localStorage.setItem("idRoom", IdRoom);
            localStorage.setItem("player2", "people");
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
                    <Modal.Title>Join room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Id room</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    onChange={(event) => setIdRoom(event.target.value)}
                                />
                                <label>CodeGame</label>
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
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalJoinRoom;

