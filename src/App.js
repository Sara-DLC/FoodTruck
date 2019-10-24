import React from 'react';
import { Route } from 'react-router-dom';
import '../src/components/scss/app.scss';
import UserForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Favorites from './components/Favorites';
import Menu from './components/Menu';
import VendorPage from './components/VendorPage';
import SearchPage from './components/SearchPage';
import PrivateRoute from './components/PrivateRoute';



function App() {
 

  return (
    <div className="App">
         <div className="App">
      <Route exact path ='/' component={UserForm}/>
      <Route exact path ="/register" component={RegisterForm}/>
      <PrivateRoute component={Favorites} exact path = '/favorites'/>
      <PrivateRoute component={SearchPage} exact path = '/truck-search'/>
      <PrivateRoute component={VendorPage} exact path = '/trucks' />
      <PrivateRoute component={Menu} exact path = '/trucks/:id/menu'/>
        </div>
    
    </div>
  
  );
}

export default App;





