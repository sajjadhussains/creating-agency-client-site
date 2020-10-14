import React from 'react';
import './Services.css';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const Services = () => {
        const serviceData=[
            {
                name:'Web $ Mobile design',
                description:'We cruft stunning and amazing UI,using a well drafted UX to fit your product',
                image:service1
            },
            {
                name:'Graphic Design',
                description:'We cruft stunning and amazing UI,using a well drafted UX to fit your product',
                image:service2
            },
            {
                name:'Web development',
                description:'We cruft stunning and amazing UI,using a well drafted UX to fit your product',
                image:service3
            }
        ]
    return (
       <section className="service-container">
           <div className="text-center pt-5">
                <h1>Provide awesome <span style={{color:'#7AB259'}}>services</span></h1>
           </div>
           <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>

       </section>
    );
};

export default Services;