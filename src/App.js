import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderPlaced from './components/OrderPlaced/OrderPlaced';
import Order from './components/Order/Order';
import Review from './components/Review/Review';
import ServiceList from './components/ServiceList/ServiceList';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/Dashboard/MakeAdmin/MakeAdmin';

export const UserContext= createContext();

function App() {
  
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
   <Router>
     <Switch>
       <Route exact path="/">
          <Home></Home>
       </Route>
       <PrivateRoute path="/placeOrder/:id">
         <OrderPlaced></OrderPlaced>
       </PrivateRoute>
       <Route path="/placeOrder">
            <Order></Order>
       </Route>
       <Route path="/review">
         <Review></Review>
       </Route>
       <Route path="/serviceList">
         <ServiceList></ServiceList>
       </Route>
       <Route path="/login">
            <Login></Login>
       </Route>
       <Route path="/dashboard">
          <Dashboard></Dashboard>
       </Route>
       <Route path="/addService">
         <AddService></AddService>
       </Route>
       <Route Path="/makeAdmin">
         <MakeAdmin></MakeAdmin>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
