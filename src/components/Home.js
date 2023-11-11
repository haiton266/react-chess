import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/css/home.scss';
import HomeChess from '../assets/images/home_chess.jpg';
import AboutUs from '../assets/images/aboutus.png';
import { PageHeader } from 'antd';
import { MDBTypography } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
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
                    {/* <Col ></Col> */}
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
                    {/* <Col ></Col> */}
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
            <Row className="justify-content-center">
                {['Light', 'Light', 'Light'].map((variant) => (
                    <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '20%' }}
                        className="m-4 p-1"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>{variant} Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Row>

        </>
    )
}

export default Home;
{/* <div className="home">
            <Container className="mt-5">
                <Row>
                    <Col className="text-center">
                        <h1>Chess Game</h1>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <Button variant="primary">Start Game</Button>
                    </Col>
                </Row>
            </Container>
        </div> */}