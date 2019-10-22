import React, { Component } from 'react';
import Navigation from './Navigation';
import logo from '../img/logo.png';

class Nav extends Component {
  render() {
    let links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'Favorites', link: '#favorites' },
      { label: 'Search', link: '#search' },
    ];

    return (
      <div className="container center">
        <Navigation links={links} logo={logo} />
      </div>
    );
  }
}

export default Nav;