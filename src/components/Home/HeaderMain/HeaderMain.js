import React from 'react';
import Frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}}className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 text-brand">
               <h1> LET'S GROW YOUR <br/>
                BRAND TO THE <br/>
                NEXT LEVEL</h1><br/>
                <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam enim voluptatem quos pariatur et vitae.</p>
                <br/>
                <button class="btn btn-dark pl-5 pr-5">Hire us</button>
            </div>
            <div className="col-md-6">
                <img src={Frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;