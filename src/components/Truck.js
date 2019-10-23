import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../state/actionCreators';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './scss/Truck.scss';


const Truck = (props) => {
    const {truck, buttonText} = props;
    const [value, setValue] = React.useState(0);

    return (
        <div className='truck'>
          
            <div className='truck-image'>
                <img src={truck.imageOfTruck} alt='food truck'/>
            </div>
            <div className='truck-info'>
        
                <p>Cuisine Type: {truck.cuisineType}</p>
                <p>Average Customer Rating: {truck.customerRatingAvg}</p>
                <p>Current Location: {truck.currentLocation.location}</p>
                <p>Current Location Depart Time: {truck.currentLocation.departureTime}</p>
                <p>Next Location: {truck.nextLocation.location}</p>
                <p>Next Location Arrival Time: {truck.nextLocation.arrivalTime}</p>
            </div>
            <div className='truck-button'>
                <button><Link to={`/trucks/${truck.id}/menu`}>Menu</Link></button>
                <button>{buttonText}</button>
            <div>
                    <Box component="fieldset" mb={3} borderColor="transparent"/>
                    <Typography component="legend">Rating</Typography>
                    <Rating className="rating" name="simple-controlled"value={value}
                        onChange={(event,newValue) => {
                        setValue(newValue);
                    }}
                    />
                </div>
            </div>
        </div>
    )

}

export default connect(
    state => state,
    actionCreators
)(Truck);
