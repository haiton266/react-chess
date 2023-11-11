import Card from 'react-bootstrap/Card';
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
} from 'mdb-react-ui-kit'
function GridExample() {
    const card = [
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
        // Add similar objects for Card 3 to Card 8 with their respective data
    ];
    return (
        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 7 }).map((_, idx) => (
                <Col key={idx}>
                    <MDBCard className="small-card">
                        <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                            <MDBCardImage src={card.imgUrl} fluid alt="..." />
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>{card.title}</MDBCardTitle>
                            <MDBCardText>{card.text}</MDBCardText>
                            <MDBBtn href="#">Join room</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Col>
            ))}
        </Row>
    );
}

export default GridExample;