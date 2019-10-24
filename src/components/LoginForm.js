import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import * as Yup from "yup";
import './scss/LoginForm.scss';
import logo from '../img/login.png';
import NavigationCard from './NavigationCard';


const UserForm = ({ errors, touched }) => {


  return (
    <div>
      <NavigationCard login={true} logout={true} register={true} />

      <div className="main">


        <img src={logo} alt='people eating at the table' />

        <Form className="login-form">
          <h1>Sign In</h1>
          <Field className="user-field" ype="text" name="user" placeholder="Username" />
          {touched.user && errors.user && (
            <p className="error">{errors.user}</p>
          )}


          <Field className="user-field" type='password' name='password' placeholder='Password' />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <div className='sign-In'>
            <Button type="submit" fullWidth variant='contained' size='medium' color="primary">
              Sign In
        </Button>

            <Grid className="signup-link" >
              <Link to='/register' variant='body2'>
                {`Don't have an account? Sign Up`}
              </Link>
            </Grid>
          </div>
        </Form>


      </div>
    </div>


  );
}


const FormikUserForm = withFormik({

  mapPropsToValues({ user, password }) {
    return {
      user: user || "",
      password: password || "",
    };
  },



  validationSchema: Yup.object().shape({
    user: Yup.string().required(),

  }),




  handleSubmit(values, { props, resetForm }) {
    // uncomment if backend true
    // const params ={
    //   username: values.user,
    //   password: values.password
    // }

    axios
      .post("https://my.api.mockaroo.com/login.json?key=59ae78a0",
        {
          headers: {
            'X-API-Key': '59ae78a0'
          }
        })
      .then(response => {
        const userRole = response.data.user.role
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', response.data.user.id);
        if (userRole === 'male') {
          props.history.push("/trucks")
        } else {
          props.history.push("/favorites")
        }
        resetForm();
      })
      .catch(error => {
        alert(error.response);
      })
  }
})(UserForm);



export default FormikUserForm;