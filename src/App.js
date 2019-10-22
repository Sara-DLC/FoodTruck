import React from 'react';
import './App.css';
import UserForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import CustomerPage from './components/CustomerPage';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import VendorPage from './components/VendorPage';




function App() {
  return (
    <div className='App'>
   
   <h2>Food Truck Trackr</h2>
   
      <Route exact path ='/' component={UserForm}/>
      <Route exact path ="/register" component={RegisterForm}/>
      <Route exact path = '/user' component={CustomerPage} />
      <Route exact path = '/vendor' component={VendorPage} />
      <Route exact path = '/menu' component={Menu} />
    
    
       
     
    </div>
  
  );
}

export default App;
