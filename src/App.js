import React from 'react';
import './App.css';
import UserForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { Route } from 'react-router-dom';




function App() {
  return (
    <div className='App'>
   
   <h2>Food Truck Trackr</h2>
   
      <Route exact path ='/Login' component={UserForm}/>
      <Route exact path ="/Register" component={RegisterForm}/>
    
    
       
     
    </div>
  
  );
}

export default App;
