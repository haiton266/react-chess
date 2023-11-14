import React, { useEffect, useState } from 'react';
import '../assets/css/card.scss'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
    MDBCard,
    MDBRipple,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';
import { FetchAll } from '../Services/chessBoardServices';
import imgCard from '../assets/images/logo192.png';
import ModalJoinRoomByClick from './ModalJoinRoomByClick';

const RowCards = () => {
    const [isShowModalJoinRoom, setIsShowModalJoinRoom] = React.useState(false);
    const handleClose = () => {
        setIsShowModalJoinRoom(false);
    }
    const [roomData, setRomeData] = useState([]);
    const [idRoom, setIdRoom] = useState();
    const getRooms = async () => {
        try {
            const roomData = await FetchAll();
            setRomeData(roomData.data);
            console.log(roomData.data);
        }
        catch (error) {
            console.log('error', error);
        }
    }
    useEffect(() => {
        getRooms();
    }, []);

    const cardData = [
        { title: 'Card 1', text: 'Content for Card 1', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/111.webp' },
        { title: 'Card 2', text: 'Content for Card 2', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/102.webp' },
        { title: 'Card 3', text: 'Content for Card 1', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/131.webp' },
        { title: 'Card 4', text: 'Content for Card 2', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/142.webp' },
        { title: 'Card 5', text: 'Content for Card 1', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/151.webp' },
        { title: 'Card 6', text: 'Content for Card 2', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/142.webp' },
        { title: 'Card 7', text: 'Content for Card 1', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/111.webp' },
        { title: 'Card 8', text: 'Content for Card 2', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/112.webp' },
        { title: 'Card 9', text: 'Content for Card 1', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/111.webp' },
        { title: 'Card 10', text: 'Content for Card 2', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/112.webp' },
        { title: 'Card 11', text: 'Content for Card 2', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/101.webp' },
        // Add similar objects for Card 3 to Card 8 with their respective data
    ];

    const processLinkClick = (index) => {
        setIsShowModalJoinRoom(true);
        setIdRoom(index);
    }
    const cardsPerRow = 5;
    return (
        <>
            <Row md={cardsPerRow} className="g-3">
                {roomData.map((card, index) => (
                    <Col key={index}>
                        <MDBCard className="small-card" >
                            <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay" >
                                <MDBCardImage src={imgCard} fluid alt="..." />
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle>Room {card.id}</MDBCardTitle>
                                <MDBCardText>Card text</MDBCardText>
                                <MDBBtn href="#" color='light' onClick={() => processLinkClick(card.id)}>Join</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                ))}
            </Row>
            <ModalJoinRoomByClick
                show={isShowModalJoinRoom}
                handleClose={handleClose}
                idRoom={idRoom}
            />
        </>
    )
};

export default RowCards;
