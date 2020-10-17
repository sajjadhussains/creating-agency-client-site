import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="carousel-list">
                    <ul>
                        <li className="first-link"><Link to="/dashboard" className="link" style={{textDecoration:'none',color:'black'}}><span>Service list</span></Link></li>
                        <li className="second-link"><Link to="/addService" className="link"  style={{textDecoration:'none',color:'black'}}><span>Add service</span></Link></li>
                        <li className="third-link"><Link to="/makeAdmin" className="link"  style={{textDecoration:'none',color:'black'}}><span>Make admin</span></Link></li>
                    </ul>
                </div>
    );
};

export default SideBar;