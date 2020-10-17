import React from 'react';
import Navbar from '../../../Home/Navbar/Navbar';
import SideBar from '../../SideBar/SideBar';

const MakeAdmin = () => {
    return (
      <section>
          <Navbar></Navbar>
          <div className="container-fluid row">
              <div col-md-3>
                <SideBar></SideBar>
              </div>
              <div className="col-md-9">
              <div class="jumbotron w-100">
           <form class="form-inline">
  <div class="form-group mb-2 mr-5">
  <label for="exampleInputEmail1">give admin email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <button type="submit" class="btn btn-dark mb-2 pr-5 pl-5">Submit</button>
</form>
        </div>
              </div>
          </div>
      </section>
    );
};

export default MakeAdmin;