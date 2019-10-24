import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import '../components/scss/searchPage.scss';
import * as actionCreators from '../state/actionCreators';
import Truck from './Truck';
import NavigationCard from './NavigationCard';


const SearchPage = (props) => {
    const { searchTrucks, trucks, getTrucks, addTrucks } = props;

    useEffect(()=>{
        getTrucks();
    },[])

    const submit = (formValue, actions) => {
        debugger
        if(formValue.options === 'cuisineType'){
            const newTrucks = trucks.filter(truck => {
                return truck.cuisineType.toLowerCase().includes(formValue.value.toLowerCase())
            })
            addTrucks(newTrucks)
        }else if (formValue.options === 'customerRatingAvg'){
            const newTrucks = trucks.filter(truck => {
                return truck.customerRatingAvg >= Number(formValue.value)
            })
            addTrucks(newTrucks)
        }
        
        // uncomment if backend true
        // searchTrucks(formValue);
        actions.resetForm();
    }

    return (
        <div>
            <NavigationCard search={true} favorites={true} logout={true} />

            <div className='search-page'>

                <Formik

                    initialValues={{
                        options: '',
                        value: ''
                    }}
                    onSubmit={submit}
                    render={props => {
                        return (
                            <Form className='search-form'>
                                <Field className='dropdown' component='select' name='options' >
                                    <option>Search By</option>
                                    <option value='cuisineType'>Cuisine Type</option>
                                    <option value='customerRatingAvg'>Average Rating</option>
                                    <option value='radSize'>Distance</option>
                                </Field>
                                <Field className="search-field" name='value' type='text' placeholder='search' />
                                <button className="search-btn" type='submit'>Search</button>
                            </Form>
                        )
                    }} />
                <div className='search-results'>
                    {trucks.map(truck => (
                        <Truck truck={truck} buttonText='Add to Fav' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(SearchPage);