import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="whole-footer">
          <div className="row">
          <div className="col-sm-6">
                <h1 style={{ paddingTop: '40px' }} className="text-center">Let us handle your project, professionally </h1>
                <br/>
                <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam.</p>
            </div>
            <div style={{ paddingTop: '40px' }} className="col-sm-6 form-area">
                <form action="">
                    <p><input type="text" name="" id="" placeholder="Enter your name"/></p>
                    <p><input type="email" name="" id="" placeholder="Enter your email"/></p>
                    <p><textarea type="message" name="message" id=""rows="10" cols="30" placeholder="Enter your message"/></p>
                    <button className="btn btn-dark pl-5 pr-5" type="submit">send</button>
                </form>
            </div>
            
          </div>
          <div style={{backgroundColor:"#FBD062",paddingTop:"80px"}}>
               <p className="text-center">Copyright orange labs 2020</p>
           </div>
        </footer>
    );
};

export default Footer;