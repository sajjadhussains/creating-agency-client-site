import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.image} alt="" />
            <h3 className="mt-3 mb-3">{service.name}</h3>
    <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;