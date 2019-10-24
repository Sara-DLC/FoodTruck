import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './scss/modal.scss';


const Modal = ({ errors, touched, status }) => {
const [trucks, setTrucks] = useState([]);
useEffect(() => {
status && setTrucks(newTrucks => [...newTrucks, status]);
}, [status]);

return (
  <div className="modal">
<Popup trigger={<button className="btn-style"> Create Truck </button>} modal>
<div className='modal-styles'>
    <h4>Truck Information</h4>
    <Form>
    <Field type='text' name='cuisine' placeholder='Enter Cuisine Type' />
    {touched.cuisine && errors.cuisine && (
        <p>{errors.cuisine}</p>
    )}

    <Field  type='text' name='location' placeholder='Enter Current Location' />
    {touched.location && errors.location && <p className="error">{errors.location}</p>}

    <Field
        component='textarea'
        type='text'
        name='description'
        placeholder='Please enter truck description here...'
    />
    {touched.description && errors.description && (
        <p>{errors.description}</p>
    )}
    
    <button type='submit'>Add</button>
    
    
    </Form>
    <button>Upload Image</button>
    <button type='submit'>Edit</button>
   

    {trucks.map(truck => (
    <ul key={truck.id}>
        <p>Added the following:</p>
        <li>Cuisine: {truck.cuisine}</li>
        <li>Location: {truck.location}</li>
        <li>Description: {truck.description}</li>
        <img src={truck.picture} alt='food truck'/>
    </ul>
    ))}
</div>
</Popup>
</div>
);
};

const FormikModal = withFormik({
 
  mapPropsToValues({ cuisine, location, description }) {
    return {
        cuisine: cuisine || '',
        location: location || '',
        description: description || '',
    };
  },

  validationSchema: Yup.object().shape({
    cuisine: Yup.string().required(),
    location: Yup.string().required(),
    description: Yup.string(),
  }),

  
  handleSubmit(values, { props , resetForm}) {
    /*What we want to pass to edit fields */
    axios
      .post('https://food-truck-finder-rj.herokuapp.com/api', values)
      .then(res => {
        
      })
      .catch(err =>(err.response));
  }
})(Modal); 

export default FormikModal;