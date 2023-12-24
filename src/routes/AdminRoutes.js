import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Alert } from 'react-bootstrap';

const AdminRoutes = (props) => {
    const { user } = useContext(UserContext);
    const isAdmin = user && user.role === 'admin'; // Giả sử 'role' là thuộc tính xác định quản trị viên

    if (!isAdmin) {
        return (
            <Alert variant="danger">
                Bạn không có quyền truy cập vào trang này
            </Alert>
        );
    }

    return <>{props.children}</>;
}

export default AdminRoutes;
