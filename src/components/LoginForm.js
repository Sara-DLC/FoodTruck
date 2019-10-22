import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import * as Yup from "yup";


const UserForm = ({errors, touched, values, status}) => {

    const [userName, setUserName] = useState([]);

    

    useEffect (() =>{
        status && setUserName (userName => [...userName, status]);
    },[status]);


    return (
    <div className="main">

       
        
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
              <Link to='/Register' variant='body2'>
                {`Don't have an account? Sign Up`}
              </Link>
            </Grid>
            </label>
        </Form>

<label>

    {userName.map(memberId =>(
        <div key= {userName.Id}>
            <p> Username: {memberId.user}</p>
            <p> Email: {memberId.email}</p> 
        </div>
    ))}
    
    </label>
    </div>
  

);
}


const FormikUserForm = withFormik({
 
    mapPropsToValues({user, email, password, options}) {
      return {
        user: user || "",
        email: email || "",
        password: password || "",
        options: options || ""
      };
    },
  
 

    validationSchema: Yup.object().shape({
      user: Yup.string().required(),
      email: Yup.string().required(),
     options: Yup.string().notOneOf(["Option Required"]).required()
    }),

  


    handleSubmit(values, { setStatus, resetForm }) {
      axios
        .post("https://reqres.in/api/users/", values)
        .then(response => {
          setStatus(response.data);
          resetForm();
          console.log(response);
        })
        .catch(error => console.log(error.response));
    }
  })(UserForm); 



export default FormikUserForm;