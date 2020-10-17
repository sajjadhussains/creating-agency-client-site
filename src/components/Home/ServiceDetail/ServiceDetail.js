import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleClick = (serviceName, picture) => {
        const newUser={ ...loggedInUser }
        newUser.serviceHolder=serviceName;
        newUser.servicePhoto=picture;
        setLoggedInUser(newUser)
        let path = `placeOrder/${service.id}`;
        history.push(path);
    }
    return (
        <div onClick={() => handleClick(service.name, service.image.img)} className="col-md-4 text-center animated-effect">
            <img style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
            <h3 className="mt-3 mb-3">{service.name}</h3>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;