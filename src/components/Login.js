import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { loginApi } from '../Services/userServices';
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { UserContext } from '../context/UserContext';
import { Container } from 'react-bootstrap';

const Login = () => {
    const { loginContext, user } = useContext(UserContext);

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        try {
            let res = await loginApi(username, password);
            if (res && res.data) {
                console.log(res.data);
                loginContext(username, res.data.access_token);
                navigate('/');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Container >
                <MDBContainer fluid>

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12'>

                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' size="lg" onChange={(event) => setUsername(event.target.value)} />
                                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={(event) => setPassword(event.target.value)} />

                                    <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                                    <button
                                        className="login-button"
                                        onClick={handleLogin}
                                        style={{
                                            backgroundColor: '#333333', // Màu nền đen
                                            color: 'white', // Màu chữ trắng
                                            fontSize: '18px', // Cỡ chữ
                                            padding: '10px 20px', // Khoảng cách padding
                                            border: '2px solid white', // Viền trắng
                                            borderRadius: '5px', // Bo góc
                                            cursor: 'pointer', // Con trỏ chuột
                                            margin: '10px 5px' // Margin xung quanh nút
                                        }}
                                    >
                                        Login
                                    </button>



                                    <div className='d-flex flex-row mt-3 mb-5'>
                                        <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                            <MDBIcon fab icon='facebook-f' size="lg" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                            <MDBIcon fab icon='twitter' size="lg" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                            <MDBIcon fab icon='google' size="lg" />
                                        </MDBBtn>
                                    </div>

                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </Container >
        </>
    );
}

export default Login;