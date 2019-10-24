import React from 'react';
import './scss/navigation.scss';
import {Link} from 'react-router-dom';
import logo from '../img/logo-2.png';

const Nav =({home, search, myTrucks, favorites, login, register, logout}) =>{
  

  const onLogout = event => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
  }
 
    return(
     
      <header className='header-section' >
          <img src={logo} alt="FoodTruck Trackr Logo"/>
        <nav className="nav-bar">
              <Link to='/'>HOME</Link>
              <Link to='/'>ABOUT US</Link>
              {favorites? <Link to='/favorites'>FAVORITES</Link> : null}
              {search? <Link to='/truck-search'>SEARCH</Link> : null}
              {myTrucks? <Link to='/trucks'>TRUCKS</Link> : null}
              {login ? <Link to='/'>LOGIN</Link> : null }
              {register ? <Link to='/register'>REGISTER</Link> : null }
              {logout ? <Link to='/' onClick={onLogout}>LOGOUT</Link> : null }
          </nav>

      </header>
  
    );

}


export default Nav;