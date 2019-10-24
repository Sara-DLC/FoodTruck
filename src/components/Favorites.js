import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Truck from './Truck';
import NavigationCard from './NavigationCard';
import './scss/Favorites.scss';



const Favorites = (props) => {

    const { getFavorites, trucks } = props;

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <div>
            <NavigationCard search={true} favorites={true} logout={true} />
            <div className='favorite-trucks'>
                {trucks.map(item => (
                    <Truck truck={item} buttonText='Remove' className="fav-btn" />
                ))}

            </div>
        </div>
    )


}

export default connect(
    state => state,
    actionCreators
)(Favorites);