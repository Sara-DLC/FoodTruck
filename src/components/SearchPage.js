import React from 'react';
import {connect} from 'react-redux';
import {Formik, Field, Form} from 'formik';
import '../components/scss/searchpage.scss';
import * as actionCreators from '../state/actionCreators';
import Truck from './Truck';

const SearchPage = (props) => {

    const {searchTrucks, trucks} = props;

    const submit = (formValue, actions) => {
        searchTrucks(formValue);
        actions.resetForm();
    }

    return (
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
                        <Field className="search-field" name='value' type='text' placeholder='search'/>
                        <button className="search-btn"type='submit'>Search</button>
                    </Form>
                )
            }}/>
            <div className='search-results'>
                {trucks.map(truck => (
                    <Truck truck={truck} buttonText='Add to Fav'/>
                ))}
            </div>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(SearchPage);