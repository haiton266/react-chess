import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { PostCreate } from '../Services/chessBoardServices.js';
import { useNavigate } from 'react-router-dom';
const ModalCreateRoom = (props) => {
    const navigate = useNavigate();
    const { show, handleClose } = props;
    const [codeGame, setCodeGame] = useState();
    const createRoomApi = async () => {
        try {
            let username = localStorage.getItem("username");
            let res = await PostCreate("R2N2B2Q2K2B2N2R2P2P2P2P2P2P2P2P20000000000000000000000000000000000000000000000000000000000000000P1P1P1P1P1P1P1P1R1N1B1Q1K1B1N1R1", 1, codeGame, username, "no", "0");

            if (res && res.data) {
                console.log(res.data.message)
                localStorage.setItem("p", 1);
                localStorage.setItem("idRoom", res.data.idRoom);
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Join room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <form>
                            <div className="form-group">
                                <label>Enter CodeGame</label>
                                <input
                                    type="text"
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
                    <Button variant="primary" onClick={() => createRoomApi()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalCreateRoom;