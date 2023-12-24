import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode as jwt_decode } from 'jwt-decode';
const withAdminAuth = (WrappedComponent) => {
    return class extends React.Component {
        checkAdminRole = () => {
            const token = localStorage.getItem('token');
            if (token) {
                const decodedToken = jwt_decode(token);
                console.log('decodedToken', decodedToken);
                return decodedToken.sub === 1;

            }
            console.log('Token không tồn tại.');
            return false;
        };

        render() {
            if (this.checkAdminRole()) {
                console.log('Admin đang truy cập trang này.'); // Hoặc sử dụng một hình thức thông báo khác
                return <WrappedComponent {...this.props} />;
            } else {
                return (
                    <>
                        {/* <h1>Admin Dashboard</h1> */}
                        <Navigate to="/rank" />
                    </>
                );
            }
        }
    };
};

export default withAdminAuth;
