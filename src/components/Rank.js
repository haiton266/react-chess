import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
export default function Rank() {
    return (
        <>
            <Container>
                <b style={{ margin: '50px' }}> Current Ranking </b>
                <MDBTable>
                    <MDBTableHead>
                        <tr className='table-dark'>
                            <th scope='col'>Class</th>
                            <th scope='col'>Heading</th>
                            <th scope='col'>Heading</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr className='table-light'>
                            <th scope='row'>Light</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className='table-secondary'>
                            <th scope='row'>Secondary</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className='table-light'>
                            <th scope='row'>Light</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className='table-secondary'>
                            <th scope='row'>Secondary</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className='table-light'>
                            <th scope='row'>Light</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className='table-secondary'>
                            <th scope='row'>Secondary</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className='table-success'>
                            <th scope='row'>My standing</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className='table-secondary'>
                            <th scope='row'>Secondary</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className='table-light'>
                            <th scope='row'>Light</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </Container>
        </>
    );
}