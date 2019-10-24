import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import NavigationCard from './NavigationCard';
import './scss/Menu.scss';

const Menu = (props) => {
    const { getMenu, menu } = props

    const id = props.match.params.id;

    // uncomment if backend true
    // useEffect(()=>{
    //     getMenu(id);
    // },[])

    return (
        <div>
            <NavigationCard logout={true} back={props.history} />
            <div className='menu-page'>
                {menu ?
                    menu.map(item => (
                        <div className='menu'>
                            <div className='menu-image'>
                                <img src={item.itemPhotos} alt='food' />
                            </div>
                            <div className='menu-info'>
                                <p>Meal: {item.itemName}</p>
                                <p>Description: {item.itemDescription}</p>
                                <p>Avg Rating: {item.customerRatingAvg}</p>
                                <p>Price: ${item.itemPrice}</p>
                            </div>
                            {/* <div className='menu-button'>
                        <button></button>
                        <button></button>
                    </div> */}
                        </div>
                    ))
                    : null}
            </div>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Menu);