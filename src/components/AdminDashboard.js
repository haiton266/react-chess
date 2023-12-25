import React from 'react';
import axios from 'axios';
import withAdminAuth from './withAdminAuth';

class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () => {
        try {
            const response = await axios.get('https://127.0.0.1:5001/user/status', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            this.setState({ users: response.data });
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching user data', error);
            // Xử lý lỗi
        }
    };

    render() {
        const { users } = this.state;
        return (
            <div>
                <h1>Admin Dashboard</h1>
                <p>Xin chào! Đây là trang quản trị.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.active ? 'Active' : 'Inactive'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withAdminAuth(AdminDashboard);
