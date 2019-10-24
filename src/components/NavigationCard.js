import React from 'react';
import './scss/navigation.scss';
import {Link} from 'react-router-dom';
import logo from '../img/logo-2.png';

const Nav =({home, search, features, about, login, register}) =>{
 
    return(
     
      <header className='header-section' >
          <img src={logo} alt="FoodTruck Trackr Logo"/>
        <nav className="nav-bar">
              <Link to='/favorites'>HOME{home}</Link>
              <Link to='/'>FEATURES{features}</Link>
              <Link to='truck-search'>SEARCH{search}</Link>
              <Link to='/'>ABOUT US{about}</Link>
              <Link to='/'>LOGIN{login}</Link>
              <Link to='/register'>REGISTER{register}</Link>
          </nav>

      </header>
  
    );

}


export default Nav;