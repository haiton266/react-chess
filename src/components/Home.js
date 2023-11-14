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
import chess2 from '../assets/images/chess2.png';
import chess3 from '../assets/images/chess3.png';

const Home = () => {
    const cardData = [
        { title: 'Card 1', text: 'Content for Card 1', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/111.webp' },
        { title: 'Card 2', text: 'Content for Card 2', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/102.webp' },
        { title: 'Card 3', text: 'Content for Card 1', imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/131.webp' }
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
                <Row md={5} className="d-flex justify-content-center align-items-center">
                    <Col >
                        <MDBCard className="small-card d-flex justify-content-center align-items-center">
                            <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay" >
                                <MDBCardImage src={chess1} fluid alt="..." width={'90px'} />
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle>Room</MDBCardTitle>
                                <MDBCardText>Card text</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col >
                        <MDBCard className="small-card d-flex justify-content-center align-items-center" >
                            <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay" >
                                <MDBCardImage src={chess2} fluid alt="..." width={'90px'} />
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle>Room</MDBCardTitle>
                                <MDBCardText>Card text</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col >
                        <MDBCard className="small-card d-flex justify-content-center align-items-center" >
                            <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay" >
                                <MDBCardImage src={chess3} fluid alt="..." width={'90px'} />
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle>Room</MDBCardTitle>
                                <MDBCardText>Card text</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Home;