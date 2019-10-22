import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import NavigationCard from './NavigationCard';
import Truck from './Truck';

const Favorites = (props) => {

    const {getFavorites, trucks} = props;

    // useEffect(()=>{
    //     getFavorites();
    // },[]);

    return (
        <div className='favorite-trucks'>
            <NavigationCard/>
            {trucks.map(item => (
                <Truck truck={item} buttonText='Remove'/>  
            ))}
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Favorites);