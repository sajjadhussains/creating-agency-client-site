import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import AdminService from '../AdminService/AdminService';
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {
    return (
       <section>
           <Navbar></Navbar>
           <div className="container-fluid row">
               <div className="col-md-3">
                   <SideBar></SideBar>
               </div>
               <div className="col-md-9">
                   <AdminService></AdminService>
               </div>
           </div>
       </section>
    );
};

export default Dashboard;