import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/css/home.scss';
import ChessRulesImg from '../assets/images/chess_rules.jpg'; // Hình ảnh mới
import { MDBTypography } from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
} from 'mdb-react-ui-kit';
import movePieceImg from '../assets/images/move_piece.png'; // Hình ảnh mới
import checkmateImg from '../assets/images/checkmate.png'; // Hình ảnh mới
import specialMovesImg from '../assets/images/special_moves.png'; // Hình ảnh mới
import chessboardSetupImg from '../assets/images/chessboard_setup.png'; // Hình ảnh mới
import cachxepcoImg from '../assets/images/cachxepco.gif'; // Hình ảnh mới
import vuaImg from '../assets/images/vua.gif'; // Hình ảnh mới
import hauImg from '../assets/images/hau.gif'; // Hình ảnh mới
import xeImg from '../assets/images/xe.gif'; // Hình ảnh mới
import tuongImg from '../assets/images/tuong.gif'; // Hình ảnh mới
import maImg from '../assets/images/ma.gif'; // Hình ảnh mới
import totImg from '../assets/images/tot.gif'; // Hình ảnh mới
import thanghangImg from '../assets/images/thanghang.gif'; // Hình ảnh mới
import En_Passantgif from '../assets/images/En_Passant.gif'; // Hình ảnh mới
import En_Passantjpg from '../assets/images/En_Passant.jpg'; // Hình ảnh mới

const ChessRules = () => {
    const rulesData = [
        { title: 'Piece Movements', text: 'Learn how each piece moves on the chessboard.', imgUrl: movePieceImg },
        { title: 'Check and Checkmate', text: 'Understand the rules of check and checkmate.', imgUrl: checkmateImg },
        { title: 'Special Moves', text: 'Discover special moves like castling and en passant.', imgUrl: specialMovesImg }
    ];
    return (
        <>
            <div className="bg-black text-white">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col className="p-5 ">
                        <div className="div-home1 p-5">
                            <MDBTypography tag='div' className='display-1 pb-3 mb-3 border-bottom'><b>Chess Rules</b></MDBTypography>
                            <p>"Master the rules of chess and start your journey to become a chess grandmaster."</p>
                        </div>
                    </Col>
                    <Col className="p-4">
                        <div className='div-home2'>
                            <img
                                src={ChessRulesImg}
                                className="img-fluid"
                                alt="Chess Rules"
                            />
                        </div>
                    </Col>
                </Row>
            </div >
            <Container>
                <Row md={3} className="d-flex justify-content-center align-items-center">
                    {rulesData.map((card, index) => (
                        <Col key={index}>
                            <MDBCard className="small-card d-flex justify-content-center align-items-center">
                                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay" >
                                    <MDBCardImage src={card.imgUrl} fluid alt={card.title} width={'90px'} />
                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>{card.title}</MDBCardTitle>
                                    <MDBCardText>{card.text}</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                    ))}
                </Row>
            </Container >
            <div className="chessboard-setup">

                <h2>How to Play Chess: 7 Rules To Get You Started</h2>




                <p>It's never too late to learn how to play chess—the most popular game in the world! Learning the rules of chess is easy::</p>

                <h2>Step 1. How To Setup The Chessboard</h2>
                <p>At the beginning of the game the chessboard is laid out so that each player has the white (or light) color square in the bottom right-hand side.</p>
                <img src={chessboardSetupImg} alt="Chessboard Setup" className="img-fluid" />
                <p>
                    The chess pieces are then arranged the same way each time. The second row (or rank) is filled with pawns. The rooks go in the corners, then the knights next to them, followed by the bishops, and finally the queen, who always goes on her own matching color (white queen on white, black queen on black), and the king on the remaining square.
                </p>

                <img
                    src={cachxepcoImg}
                    alt="Chessboard Setup"
                    className="img-fluid"
                    style={{ maxWidth: '25%' }} // Hoặc sử dụng kích thước cụ thể, ví dụ: width: '200px'
                />

                <h2>Step 2. How The Chess Pieces Move</h2>
                <p>Each of the 6 different kinds of pieces moves differently. Pieces cannot move through other pieces (though the knight can jump over other pieces), and can never move onto a square with one of their own pieces. However, they can be moved to take the place of an opponent's piece which is then captured. Pieces are generally moved into positions where they can capture other pieces (by landing on their square and then replacing them), defend their own pieces in case of capture, or control important squares in the game.</p>
                <h2>How to Move the King in Chess</h2>
                <p>The king is the most important piece, but is one of the weakest. The king can only move one square in any direction - up, down, to the sides, and diagonally.</p>

                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ZWjDKiHBvZo?start=39"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <p>The king may never move himself into check (where he could be captured). When the king is attacked by another piece this is called "check".</p>
                <img
                    src={vuaImg}
                    alt="Chessboard Setup"
                    className="img-fluid"
                    style={{ maxWidth: '25%' }} // Hoặc sử dụng kích thước cụ thể, ví dụ: width: '200px'
                />

                <h2>How To Move The Queen In Chess </h2>
                <p>The queen is the most powerful piece. She can move in any one straight direction - forward, backward, sideways, or diagonally - as far as possible as long as she does not move through any of her own pieces.</p>

                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/vwgwI0wnULU"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>

                <p>And, like with all pieces, if the queen captures an opponent's piece her move is over. Notice how the white queen captures the black queen and then the black king is forced to move.</p>
                <img
                    src={hauImg}
                    alt="Chessboard Setup"
                    className="img-fluid"
                    style={{ maxWidth: '25%' }} // Hoặc sử dụng kích thước cụ thể, ví dụ: width: '200px'
                />

                <h2>How To Move The Rook In Chess</h2>
                <p>The rook may move as far as it wants, but only forward, backward, and to the sides.</p>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/PlgnoYqsK-8"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <p>The rooks are particularly powerful pieces when they are protecting each other and working together!</p>

                <img
                    src={xeImg}
                    alt="Chessboard Setup"
                    className="img-fluid"
                    style={{ maxWidth: '25%' }} // Hoặc sử dụng kích thước cụ thể, ví dụ: width: '200px'
                />
                <h2>How To Move The Bishop In Chess</h2>
                <p>The bishop may move as far as it wants, but only diagonally. Each bishop starts on one color (light or dark) and must always stay on that color..</p>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/_y3eA21rD1w"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <p>Bishops work well together because they cover up each other's weaknesses.</p>
                <img
                    src={tuongImg}
                    alt="Chessboard Setup"
                    className="img-fluid"
                    style={{ maxWidth: '25%' }} // Hoặc sử dụng kích thước cụ thể, ví dụ: width: '200px'
                />
                <h2>How To Move The Knight In Chess</h2>
                <p>Knights move in a very different way from the other pieces – going two squares in one direction, and then one more move at a 90-degree angle, just like the shape of an “L”.</p>

                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/VGoT8FR0O_8"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <p>Knights are also the only pieces that can move over other pieces.

                </p>
                <img
                    src={maImg}
                    alt="Chessboard Setup"
                    className="img-fluid"
                    style={{ maxWidth: '25%' }} // Hoặc sử dụng kích thước cụ thể, ví dụ: width: '200px'
                />
                <h2>How To Move The Pawn In Chess</h2>
                <p>Pawns are unusual because they move and capture in different ways: they move forward but capture diagonally. Pawns can only move forward one square at a time, except for their very first move where they can move forward two squares.</p>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/00uUlbcPz5E"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <p>Pawns can only capture one square diagonally in front of them. They can never move or capture backward. If there is another piece directly in front of a pawn he cannot move past or capture that piece.</p>
                <img
                    src={totImg}
                    alt="Chessboard Setup"
                    className="img-fluid"
                    style={{ maxWidth: '25%' }} // Hoặc sử dụng kích thước cụ thể, ví dụ: width: '200px'
                />
                <h2>Step 3. Discover The Special Rules Of Chess</h2>
                <p>There are a few special rules in chess that may not seem logical at first. They were created to make the game more fun and interesting.</p>
                <h2>How To Promote A Pawn In Chess</h2>
                <p>Pawns have another special ability and that is that if a pawn reaches the other side of the board it can become any other chess piece (called promotion) excluding a king (or pawn, for that matter).</p>

                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Tt8VTZFPFa4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>

                <p>A pawn may be promoted to a knight, bishop, rook, or queen. A common misconception is that pawns may only be exchanged for a piece that has been captured. That is NOT true. A pawn is usually promoted to a queen. Only pawns may be promoted.</p>


                <img
                    src={thanghangImg}
                    alt="Chessboard Setup"
                    className="img-fluid"
                    style={{ maxWidth: '25%' }} // Hoặc sử dụng kích thước cụ thể, ví dụ: width: '200px'
                />
                <h2>How To Do "En Passant" In Chess</h2>
                <p>The last rule about pawns is called “en passant,” which is French for “in passing”. If a pawn moves out two squares on its first move, and by doing so lands to the side of an opponent's pawn (effectively jumping past the other pawn's ability to capture it), that other pawn has the option of capturing the first pawn as it passes by.</p>

                <img
                    src={En_Passantjpg}
                    alt="Chessboard Setup"
                    className="img-fluid"
                    style={{ maxWidth: '25%' }} // Hoặc sử dụng kích thước cụ thể, ví dụ: width: '200px'
                />
                <p>This special move must be done immediately after the first pawn has moved past, otherwise the option to capture it is no longer available. Click through the example below to better understand this odd, but important rule.</p>

                <img
                    src={En_Passantgif}
                    alt="Chessboard Setup"
                    className="img-fluid"
                    style={{ maxWidth: '25%' }} // Hoặc sử dụng kích thước cụ thể, ví dụ: width: '200px'
                />
            </div>
        </>
    );
}
export default ChessRules;

