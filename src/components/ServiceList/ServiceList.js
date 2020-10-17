import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../Home/Navbar/Navbar';
import './ServiceList.css';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://nameless-caverns-85256.herokuapp.com/servicePlaced?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
    }, [loggedInUser.email])
    return (
        <div>
            <Navbar></Navbar>
            <div className='row'>
                <div className="col-md-3 carousel-list">
                    <ul>
                        <li className="first-link"><Link to="/placeOrder" className="link" style={{ textDecoration: 'none', color: 'black' }}><span>Order</span></Link></li>
                        <li className="second-link"><Link to="/serviceList" className="link" style={{ textDecoration: 'none', color: 'black' }}><span>Service list</span></Link></li>
                        <li className="third-link"><Link to="/review" className="link" style={{ textDecoration: 'none', color: 'black' }}><span>Review</span></Link></li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <div className='row jumbotron'>
                        {
                            services.map(services => {
                                return <div className='col-md-5'>
                                    <div className="p-3 text-center">
                                        <img className='w-25' src={`data:image/png;base64,${services.picture}`} alt="" />
                                        <h4>{services.service}</h4>
                                        <p> {services.description} </p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;