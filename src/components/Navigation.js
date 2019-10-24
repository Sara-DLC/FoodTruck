import React, { Component } from 'react';
import '../components/scss/navigation.scss';
import NavigationCard from './NavigationCard';


class Navigation extends Component {

    render() {
        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a className="link" href={link.link}>{link.label}</a>
            ) : (
                    <a className="link" href={link.link}>{link.label}</a>
                );

            return (
                <li key={index} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });

        return (

            <nav className="nav-bar">

                <div className="menu-right">

                    <ul>
                        <NavigationCard />   {linksMarkup}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;




