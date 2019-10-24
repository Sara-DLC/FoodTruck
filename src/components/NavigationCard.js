import React from 'react';
import './scss/navigation.scss';
import { Link } from 'react-router-dom';
import logo from '../img/logo-2.png';

const Nav = (props) => {
  const { back, search, myTrucks, favorites, login, register, logout } = props


  const onLogout = event => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
  }

  const goBack = event => {
    event.preventDefault();
    back.goBack()
  }

  return (

    <header className='header-section' >
      <img src={logo} alt="FoodTruck Trackr Logo" />
      <nav className="nav-bar">
        <a href='https://foodtruckr.netlify.com'>HOME</a>
        <a href='https://foodtruckr.netlify.com/about.html'>ABOUT US</a>
        {favorites ? <Link to='/favorites'>FAVORITES</Link> : null}
        {search ? <Link to='/truck-search'>SEARCH</Link> : null}
        {myTrucks ? <Link to='/trucks'>TRUCKS</Link> : null}
        {back ? <Link onClick={goBack}>BACK</Link> : null}
        {login ? <Link to='/'>LOGIN</Link> : null}
        {register ? <Link to='/register'>REGISTER</Link> : null}
        {logout ? <Link to='/' onClick={onLogout}>LOGOUT</Link> : null}
      </nav>

    </header>

  );

}


export default Nav;