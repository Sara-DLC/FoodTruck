import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Truck from './Truck';

const VendorPage = (props) => {

    const {getTrucks, trucks} = props;

    useEffect(()=>{
        getTrucks();
    },[]);

    return (
        <div className='favorite-trucks'>
            {trucks.map(item => (
                <Truck truck={item} />
            ))}
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(VendorPage);