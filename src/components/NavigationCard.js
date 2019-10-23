import React, { Component } from 'react';
import Navigation from './Navigation';
import logo from '../img/logo.png';

class Nav extends Component {
  render() {
    let links = [
      { label: 'Home', link: '/favorites', active: true },
      { label: 'Search', link: '/truck-search' },
      { label: 'Sign Out', link: '/' },
    ];

    return (
      <div className="container center">
        <Navigation links={links} logo={logo} />
      </div>
    );
  }
}

export default Nav;