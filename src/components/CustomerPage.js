import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Truck from './Truck';

const CustomerPage = (props) => {

    const {getFavorites, favorites} = props;

    useEffect(()=>{
        getFavorites();
    },[]);

    return (
        <div className='favorite-trucks'>
            {favorites.map(item => (
                <Truck truck={item} />
            ))}
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(CustomerPage);