import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { createTournament } from '../Services/chessBoardServices.js';

const ModalCreateTournament = (props) => {
    const { show, handleClose } = props;
    const [numberPlayer, setNumberPlayer] = useState(0);
    const [players, setPlayers] = useState("");
    const createTournamentAPI = async () => {
        try {
            let numPlayers = parseInt(numberPlayer);
            let res = await createTournament(numPlayers, players);
            if (res.data.status === "success") {
                alert("Create tournament success");
                handleClose();
            }
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
                                <label for="exampleInputEmail1">Number player</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    onChange={(event) => setNumberPlayer(event.target.value)}
                                />
                                <label>Players (separate by comma) </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    onChange={(event) => setPlayers(event.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => createTournamentAPI()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalCreateTournament;

