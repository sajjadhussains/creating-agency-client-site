import React, { useContext, useState } from 'react';
import SideBar from '../Dashboard/SideBar/SideBar';
import Navbar from '../Home/Navbar/Navbar';

const Review = () => {
    const [info,setInfo]=useState({})
    const [file,setFile]=useState(null)
    const handleBlur=e=>{
        const newInfo={...info};
        newInfo[e.target.name]=e.target.value;
        setInfo(newInfo)
    }
    
    const handleFileChange=(e)=>{
        const newFile=e.target.files[0];
        setFile(newFile)
    }
    const handleSubmit=()=>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('company', info.company)
        formData.append('description', info.description)
      
        fetch('https://nameless-caverns-85256.herokuapp.com/reviewer', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
      }
    return (
        <section>
            <Navbar></Navbar>
            <div className="container-fluid row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div style={{ backgroundColor: '#E5E5E5', height: '100%' }} className="col-md-9">
                    <div style={{ margin: '10px' }} className="jumbotron">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Your name</label>
                                <input onBlur={handleBlur} type="text" class="form-control" name="name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Companies name designation</label>
                                <input onBlur={handleBlur} type="text" class="form-control" name="company" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">description</label>
                                <textarea onBlur={handleBlur} class="form-control" name="description" rows="3"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Icon</label>
                                <input onChange={handleFileChange} type="file" class="form-control w-25" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" class="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;