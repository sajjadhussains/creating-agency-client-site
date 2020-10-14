import React from 'react';
import customer1 from '../../../images/customer1.png';
import customer2 from '../../../images/customer2.png';
import customer3 from '../../../images/customer3.png';
import './ClientsFeedback.css'

const ClientsFeedback = () => {
    const clientData = [
        {
            id: 1,
            image: customer1,
            name: 'Nash Patrik',
            title: 'CEO,monpal',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 1,
            image: customer2,
            name: 'Nash Patrik',
            title: 'CEO,monpal',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 1,
            image: customer3,
            name: 'Nash Patrik',
            title: 'CEO,monpal',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ]
    return (
        <div className="container main-section">
            <h1 className="text-center main-heading">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>

            <div className="row">
                {
                    clientData.map(client => {
                        return <div className="col-sm-3 card-section">
                            <div className="d-flex padding-section">
                                <div className="image-section">
                                    <img className="img-responsive image-size" src={client.image} alt="" />
                                </div>
                                <div>
                                    <h5>{client.name}</h5>
                                    <h6>{client.title}</h6>
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