import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import { getAllUser } from '../Services/userServices';

export default function Rank() {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const usersData = await getAllUser();
            setUsers(usersData.data);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <Container>
                <div className='p-2'>
                    <h3> Current ranking </h3>
                </div>
                <MDBTable>
                    <MDBTableHead>
                        <tr className='table-dark' style={{ fontWeight: 'bold', height: '50px', verticalAlign: 'middle' }}>
                            <th scope='col' style={{ width: '15%' }}>Id</th>
                            <th scope='col' style={{ width: '32%' }}>Username</th>
                            <th scope='col' style={{ width: '25%' }}>Score</th>
                            <th scope='col' style={{ width: '20%' }}>Number of matches</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {users && users.length > 0 &&
                            users.map((user, index) => (
                                <tr key={index} className={user.username !== localStorage.getItem('username') ? 'table-light' : 'table-success'} style={{ height: '50px' }}>
                                    <th scope='row' style={{ verticalAlign: 'middle', fontWeight: user.username === localStorage.getItem('username') ? 'bold' : 'normal' }}>{user.id}</th>
                                    <td style={{ verticalAlign: 'middle', fontWeight: user.username === localStorage.getItem('username') ? 'bold' : 'normal' }}>{user.username}</td>
                                    <td style={{ verticalAlign: 'middle', fontWeight: user.username === localStorage.getItem('username') ? 'bold' : 'normal' }}>{user.score}</td>
                                    <td style={{ verticalAlign: 'middle', fontWeight: user.username === localStorage.getItem('username') ? 'bold' : 'normal' }}>{user.numMatch}</td>
                                </tr>
                            ))}
                    </MDBTableBody>
                </MDBTable>
            </Container>



        </>
    );
}
