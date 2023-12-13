import React, { useState, useContext } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RegisterApi } from '../Services/userServices';
import { verify_otp } from '../Services/UserRegistrationTemp';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import dangki from '../assets/images/dangki.jpg';

const Register = () => {
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { RegisterContext, user } = useContext(UserContext);

    const handleOtpSubmit = async () => {
        try {
            // Gọi hàm verify_otp với OTP và user_id
            // Bạn cần cung cấp user_id từ context hoặc state tùy theo cách bạn quản lý người dùng
            console.log(username, password, email, otp);
            const response = await verify_otp(username, password, email, otp); // Giả sử user.id là định danh người dùng của bạn

            // Xử lý phản hồi từ server
            if (response && response.status === 200) {
                console.log('OTP Verified:', response.data);
                // Xử lý sau khi xác thực thành công (ví dụ: chuyển hướng đến trang chủ hoặc hiển thị thông báo thành công)
            } else {
                console.log('OTP Verification Failed:', response.data);
                // Xử lý lỗi hoặc thông báo cho người dùng biết OTP không hợp lệ
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            // Xử lý lỗi kết nối hoặc lỗi server
        }
    }



    const otpInputForm = (
        <div className="d-flex flex-column align-items-center">
            <MDBInput label='Enter your OTP' type='text' onChange={(e) => setOtp(e.target.value)} />
            <MDBBtn onClick={handleOtpSubmit}>Submit OTP</MDBBtn>
        </div>
    );

    const handleRegister = async () => {
        try {
            let res = await RegisterApi(username, password, email);
            if (res && res.data) {
                console.log(res.data);
                // Hiển thị form OTP
                setShowOtpInput(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <MDBContainer fluid>
                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <div className="d-flex flex-row align-items-center mb-4 ">
                                    <MDBIcon fas icon="user me-3" size='lg' />
                                    <MDBInput label='Your Name' id='form1' type='text' className='w-100' onChange={(event) => setUsername(event.target.value)} />

                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                    <MDBInput label='Your Email' id='form2' type='email' onChange={(event) => setEmail(event.target.value)} />

                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg' />
                                    <MDBInput label='Password' id='form3' type='password' onChange={(event) => setPassword(event.target.value)} />

                                </div>

                                <div className='mb-4'>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                </div>

                                <MDBBtn className='mb-4' size='lg' onClick={handleRegister} style={{
                                    backgroundColor: '#333333', // Màu nền đen
                                    color: 'white', // Màu chữ trắng
                                    fontSize: '18px', // Cỡ chữ
                                    padding: '10px 20px', // Khoảng cách padding
                                    border: '2px solid white', // Viền trắng
                                    borderRadius: '5px', // Bo góc
                                    cursor: 'pointer', // Con trỏ chuột
                                    margin: '10px 5px' // Margin xung quanh nút
                                }}>Register </MDBBtn>


                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src={dangki} alt="Registration" fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
            {showOtpInput && otpInputForm}
        </Container>
    );
}

export default Register;