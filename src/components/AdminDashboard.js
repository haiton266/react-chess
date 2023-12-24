import React from 'react';
import withAdminAuth from './withAdminAuth';

class AdminDashboard extends React.Component {
    render() {
        return (
            <div>
                
                <h1>Admin Dashboard</h1>
                <p>Xin chào! Đây là trang quản trị.</p> {/* Dòng chữ chào mừng */}
                {/* Bạn có thể thêm thêm nội dung hoặc logic khác ở đây */}
            </div>
        );
    }
}

// export default AdminDashboard;
export default withAdminAuth(AdminDashboard);
