import React from 'react';
import './scss/navigation.scss';


const Nav =({home, search, features, about, login, register}) =>{
 
    return(
     
      <div >
        <nav className="nav-bar">
          <ul className="menu-right">
            <li>
              <a href="/" alt="home">HOME{home}</a>
              <a href="/truck-search" alt="search">SEARCH{search}</a>
              <a href="/" alt="features">FEATURES{features}</a>
              <a href="/" alt="about">ABOUT {about}</a>
              <a href="/" alt="login">LOGIN{login}</a>
              <a href="/register" alt="register">REGISTER{register}</a>
            </li>
          </ul>
          </nav>
      </div>
  
    );

}

export default Nav;