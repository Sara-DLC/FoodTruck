import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

const Menu = (props) => {
    const {getMenu, menu} = props

    const id = props.match.params.id;

    // useEffect(()=>{
    //     getMenu(id);
    // },[])

    return (
        <div className='menu-page'>
            {menu?
            menu.map(item => (
                <div className='menu'>
                    <p>Meal: {item.itemName}</p>
                    <p>Description: {item.itemDescription}</p>
                    <p>Avg Rating: {item.customerRatingAvg}</p>
                    <p>Price: {item.itemPrice}</p>
                </div>
            ))
            :null }
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Menu);