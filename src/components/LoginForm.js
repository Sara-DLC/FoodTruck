import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import * as Yup from "yup";


const UserForm = ({errors, touched, status}) => {

    const [userName, setUserName] = useState([]);

    

    useEffect (() =>{
        status && setUserName (userName => [...userName, status]);
    },[status]);


    return (
      
    <div className="main">
         <h1>FoodTruck TrackR</h1>
        
        <Form>
        
            <Field className="user-field" ype="text"name="user" placeholder="Username"/>
            {touched.user && errors.user && (
            <p className="error">{errors.user}</p>
            )}
            
      
            <Field className="user-field" type='password'name='password'placeholder='Password'/>
            {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
            )}

       <label className ='sign-In'>
        <Button  type="submit" fullWidth variant='contained' size='medium' color="primary">
            Sign In 
        </Button>
         
        <Grid item >
              <Link to='/register' variant='body2'>
                {`Don't have an account? Sign Up`}
              </Link>
            </Grid>
            </label>
        </Form>

{/* <label>

    {userName.map(memberId =>(
        <div key= {userName.Id}>
            <p> Username: {memberId.user}</p>
            <p> Password: {memberId.password}</p> 
        </div>
    ))}
    
    </label> */}
    </div>
  

);
}


const FormikUserForm = withFormik({
 
    mapPropsToValues({user,password}) {
      return {
        user: user || "",
        password: password || "",
      };
    },
  
 

    validationSchema: Yup.object().shape({
      user: Yup.string().required(),
 
    }),

  


    handleSubmit(values, { props, resetForm }) {
      const params ={
        username: values.user,
        password: values.password
      }

      props.history.push("/trucks")

      axios
        .post("https://food-truck-finder-rj.herokuapp.com/api/login", params)
        .then(response => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', response.data.user.id);
          props.history.push("/trucks")
          resetForm();
        })
        .catch(error => console.log(error.response));
    }
  })(UserForm); 



export default FormikUserForm;