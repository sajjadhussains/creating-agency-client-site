import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light container">
        <a class="navbar-brand" href="#">
            <img style={{height:'60px'}}src={logo} alt=""/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
              <a class="nav-link mr-5" href="#">
              <Link style={{textDecoration:'none',color:'black'}}to="/">
                 Home
               </Link>
                <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link mr-5" href="#">Our Portfolio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link mr-5" href="#">Our Team<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link mr-5" href="#contactUs">Contact Us <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link mr-5" href="#">
              <Link style={{textDecoration:'none',color:'black'}}to="/dashboard">
               dashboard
               </Link>
                <span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item active">
              <a class="nav-link mr-5" href="#">
              <Link className=""to="/login">
               <button class="btn btn-dark pl-3 pr-3">Login</button>
               </Link>
                <span class="sr-only">(current)</span></a>
            </li>
           
           
    
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;