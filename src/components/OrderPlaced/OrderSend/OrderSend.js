import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import './OrderSend.css';

const OrderSend = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)

    const [order, setOrder] = useState({})

    const handleBlur = (e) =>{
        const newOrder= {...order}
        newOrder[e.target.name]= e.target.value;
        newOrder.service= loggedInUser.serviceHolder;
        newOrder.picture= loggedInUser.servicePhoto;
        newOrder.email=loggedInUser.email;
        setOrder(newOrder)
        console.log(order)
    }
    const handleSubmit=(e)=>{
        fetch('https://nameless-caverns-85256.herokuapp.com/addService',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            alert('order places successfully');
        })
        e.preventDefault()
    }
    return (
        <div className="" style={{}}>
             <form className = 'jumbotron' onSubmit = {handleSubmit} >
                        <div className="form-group">
                            <input onBlur = {handleBlur} type="text" name = 'name' className="form-control" placeholder="Your Name / company's name" required/>
                        </div>
                        <div className="form-group">
                            <input onBlur = {handleBlur} type="text" name = 'email' className="form-control" defaultValue= {loggedInUser.email} required/>
                        </div>
                        <div className="form-group">                           
                            <input type="text" name = 'service' className="form-control" defaultValue = {loggedInUser.serviceHolder} />
                        </div>
                        <div className="form-group">
                            <textarea onBlur = {handleBlur} type="text" name = 'description' placeholder = 'Project Details' className="form-control"  rows="3" required></textarea>
                        </div>
                        <div className="form-group">
                            <input onBlur = {handleBlur} name = 'price' type="text" className="form-control" placeholder="price" required/>
                        </div>
                        <input type = 'submit' className="btn btn-dark pl-5 pr-5" value = 'submit'/>
                    </form>
        </div>
    );
};

export default OrderSend;