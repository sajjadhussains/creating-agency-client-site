import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const AdminService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://nameless-caverns-85256.herokuapp.com/servicePlaced')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <section style={{ backgroundColor: '#E5E5E5', height: '100%' }}>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Project Details</th>
                    </tr>
                </thead>

                {
                    order.map(ordering => {
                        return <tbody>
                            <tr>
                                <td>{ordering.name}</td>
                                <td>{ordering.email}</td>
                                <td>{ordering.service}</td>
                                <td>{ordering.description}</td>
                            </tr>
                        </tbody>
                    })
                }

            </table>
        </section>
    );
};

export default AdminService;