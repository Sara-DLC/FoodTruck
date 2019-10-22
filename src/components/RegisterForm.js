import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import * as Yup from "yup";


const RegisterForm = ({errors, touched, values, status}) => {

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
            
        
    
            <Field className="user-field" type="text"name="email" placeholder="Email"/>
            {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
            )}

      
            <Field className="user-field" type="password"name="password" placeholder="Password"/>
            {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
            )}

            <Field className="dropdown" component="select" name="options" >
                <option>Please Choose an Option</option>
                <option value="Vendor">Vendor</option>
              <option value="Customer">Customer</option> 
              
            </Field>
            {touched.options && errors.options && <p className="error">{errors.options}</p>}

       <label className ='sign-In'>
        <Button type="submit" fullWidth variant="contained" color="primary">
            Register
        </Button>
         
        <Grid item>
              <Link to="/Login" variant="body2">
                {"Already have an account? Login"}
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


const FormikRegisterForm = withFormik({
 
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
      debugger
      axios

        .post("https://reqres.in/api/users/", values)
        .then(response => {
          setStatus(response.data);
          resetForm();
          console.log(response);
        })
        .catch(error => console.log(error.response));
    }
  })(RegisterForm); 



export default FormikRegisterForm;