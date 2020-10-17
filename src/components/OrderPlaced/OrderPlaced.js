import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import './OrderPlaced.css'
import OrderSend from './OrderSend/OrderSend';

const OrderPlaced = () => {
    return (
       <div>
           <Navbar></Navbar>
            <div className="row container">
            <section className="col-sm-4">
                <div className="carousel-list">
                    <ul>
                        <li className="first-link"><Link to="/placeOrder" className="link" style={{textDecoration:'none',color:'black'}}><span>Order</span></Link></li>
                        <li className="second-link"><Link to="/serviceList" className="link"  style={{textDecoration:'none',color:'black'}}><span>Service list</span></Link></li>
                        <li className="third-link"><Link to="/review" className="link"  style={{textDecoration:'none',color:'black'}}><span>Review</span></Link></li>
                    </ul>
                </div>
            </section>
            <section className="col-sm-8">
                <h3>Order</h3>
                <div className="">
                    <div>
                        <OrderSend></OrderSend>
                    </div>
                </div>
            </section>
        </div>
       </div>
    );
};

export default OrderPlaced;