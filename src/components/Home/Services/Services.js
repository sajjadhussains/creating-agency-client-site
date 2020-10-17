import React from 'react';
import './Services.css';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { useState } from 'react';
import { useEffect } from 'react';
const Services = () => {
      const [serviceData,setServiceData]=useState([])
      useEffect(()=>{
          fetch('https://nameless-caverns-85256.herokuapp.com/newService')
          .then(res=>res.json())
          .then(data=>setServiceData(data))
      },[])
    return (
        <section className="services-container mt-5 service-section">
        <div className="text-center">
            <h1>Provide awesome <span style={{color:'##7AB259'}}>services</span></h1>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
            {
                serviceData.map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
            }
        </div>
    </div>
    </section>
    );
};

export default Services;