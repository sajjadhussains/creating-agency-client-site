import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';

const CompanyInfo = () => {
    return (
       <section style={{marginTop:'50px',height:'200px'}}className="row">
       <div className="col-sm-2 offset-sm-2">
           <img  style={{height:'30px'}} src={airbnb} alt=""  className="img-fluid"/>
       </div>
       <div className="col-sm-2 mr-3">
           <img  style={{height:'30px'}} src={google} alt=""  className="img-fluid"/>
       </div>
       <div className="col-sm-1 mr-3">
           <img style={{height:'30px'}} src={netflix} alt=""  className="img-fluid"/>
       </div>
       <div className="col-sm-2 mr-3">
           <img  style={{height:'30px'}} src={slack} alt=""  className="img-fluid"/>
       </div>
       <div className="col-sm-1 mr-3">
           <img  style={{height:'30px'}} src={uber} alt=""  className="img-fluid"/>
       </div>
       </section>
    );
};

export default CompanyInfo;