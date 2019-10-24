import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import { Link } from 'react-router-dom';
import NavigationCard from './NavigationCard';
import './scss/VendorPage.scss';
import Modal from './Modal';
// import Truck from './Truck';

import ft2 from '../img/ft2.jpg';

const VendorPage = (props) => {

    const {getTrucks, trucks} = props;

    // useEffect(()=>{
    //     getTrucks();
    // },[]);

    return (
        <div className='vendor-page'>
            <NavigationCard myTrucks={true} logout={true}/>
            <Modal/>
            <div className='trucks-owned'>
           
                {trucks.map(truck => (
                    <div className='truck'>
                    <div className='truck-image'>
                        <img /* src={truck.image}*/ src={ft2} alt='food truck'/>
                    </div>
                    <div className='truck-info'>
        
                        <p><strong>Cuisine Type:</strong> </p>
                        <p><strong>Average Customer Rating:</strong> </p>
                        <p><strong>Current Location:</strong> </p>
                        <p><strong>Current Location Depart Time:</strong></p>
                        <p><strong>Next Location:</strong> </p>
                        <p><strong>Next Location Arrival Time:</strong> </p>
                    </div>
                    <div className='truck-info'>
                
                        <p>{truck.cuisineType}</p>
                        <p>{truck.customerRatingAvg}</p>
                        <p>{truck.currentLocation.location}</p>
                        <p>{truck.currentLocation.departureTime}</p>
                        <p>{truck.nextLocation.location}</p>
                        <p>{truck.nextLocation.arrivalTime}</p>
                    </div>
                    <div className='truck-button'>
                        <button><Link to={`/trucks/${truck.id}/menu`}>Menu</Link></button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
                ))}
            </div>  
        </div>
        
    )
}

export default connect(
    state => state,
    actionCreators
)(VendorPage);