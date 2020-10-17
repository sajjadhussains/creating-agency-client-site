import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ClientsFeedback.css'

const ClientsFeedback = () => {
   const [reviews,setReviews]=useState([])
   useEffect(()=>{
       fetch('https://nameless-caverns-85256.herokuapp.com/reviewer')
       .then(res=>res.json())
       .then(data=>setReviews(data))
   },[])
    return (
        <div className="container main-section">
            <h1 className="text-center main-heading">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>

            <div className="row">
                {
                    reviews.map(client => {
                        return <div className="col-sm-3 card-section">
                            <div className="d-flex padding-section">
                                <div className="image-section">
                                    <img className="img-responsive image-size" src={`data:image/png;base64,${client.image.img}`} alt="" />
                                </div>
                                <div>
                                    <h5>{client.name}</h5>
                                    <h6>{client.company}</h6>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p>{client.description}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default ClientsFeedback;