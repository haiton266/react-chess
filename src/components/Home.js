import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/css/home.scss';
import HomeChess from '../assets/images/home_chess.jpg';
import AboutUs from '../assets/images/aboutus.png';
import { PageHeader } from 'antd';
import { MDBTypography } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import chess1 from '../assets/images/chess1.png';
import chess2 from '../assets/images/chess3.png';
import chess3 from '../assets/images/chess2.png';
const Home = () => {
    const cardData = [
        {
            title: 'Who are we?',
            text: 'We\'re students at Danang University of Science and Technology.',
            imgUrl: chess1
        },
        {
            title: 'Technology',
            text: 'We used ReactJS to create Frontend, Flask (Python) to create Backend, use MySQL to store data. They\'re connected by REST API',
            imgUrl: chess2
        },
        {
            title: 'Mission',
            text: 'Giving people a platform to entertain and practice thinking',
            imgUrl: chess3
        }
        // Add similar objects for Card 3 to Card 8 with their respective data
    ];
    return (
        <>
            <div className="bg-black text-white">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col className="p-5 ">
                        <div className="div-home1 p-5">
                            <MDBTypography tag='div' className='display-1 pb-3 mb-3 border-bottom'><b>CHESS GAME</b></MDBTypography>
                            <p>"Chess is the art of thinking ahead, the joy of strategy unfolding, and the passion of creating your own masterpiece on the sixty-four squares."</p>
                            <div className="d-flex">
                                <Button className="btn-home mr-2" variant="warning">
                                    Play
                                </Button>
                                <Button variant="warning">Learn More</Button>
                            </div>
                        </div>
                    </Col>
                    <Col className="p-4">
                        <div className='div-home2'>
                            <img
                                src={HomeChess}
                                className="img-fluid"
                                alt="home_chess"
                            />
                        </div>
                    </Col>
                </Row>
            </div >
            <div class='bg-white text-black'>
                <div class="div-aboutus text-center d-flex align-items-center justify-content-center">
                    <img src={AboutUs}
                        alt="About Us"
                        className="img-fluid mb-3"
                        width="80%"
                    />
                    <h1> About Us </h1>
                </div>
            </div>
            <Container>
                <Row md={3} className="d-flex justify-content-center align-items-center">
                    {cardData.map((card, index) => (
                        <Col key={index}>
                            <MDBCard className="small-card d-flex justify-content-center align-items-center">
                                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay" >
                                    <MDBCardImage src={card.imgUrl} fluid alt={card.title} width={'90px'} />
                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle className="text-center">{card.title}</MDBCardTitle>
                                    <MDBCardText>{card.text}</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                    ))}
                </Row>
            </Container >
        </>
    )
}

export default Home;