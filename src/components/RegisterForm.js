import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import * as Yup from "yup";
import './scss/LoginForm.scss';
import logo from '../img/register.png';
import NavigationCard from './NavigationCard';


const RegisterForm = ({ errors, touched }) => {


  return (
    <div>
      <NavigationCard login={true} logout={true} register={true} />
      <div className="main">
        <img src={logo} alt='girl looking for direction' />
        <Form className="login-form">
          <h2>Register Here</h2>
          <Field className="user-field" ype="text" name="user" placeholder="Username" />
          {touched.user && errors.user && (
            <p className="error">{errors.user}</p>
          )}



          <Field className="user-field" type="text" name="email" placeholder="Email" />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}


          <Field className="user-field" type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <Field className="option" component="select" name="options" >
            <option>Please Choose an Option</option>
            <option value="Vendor">Vendor</option>
            <option value="Customer">Customer</option>

          </Field>
          {touched.options && errors.options && <p className="error">{errors.options}</p>}

          <div className='sign-In'>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Register
        </Button>

            <Grid className="signup-link">
              <Link to="/" variant="body2">
                {"Already have an account? Login"}
              </Link>
            </Grid>
          </div>
        </Form>

      </div>
    </div>

  );
}


const FormikRegisterForm = withFormik({

  mapPropsToValues({ user, email, password, options }) {
    return {
      user: user || "",
      email: email || "",
      password: password || "",
      options: options || ""
    };
  },



  // validationSchema: Yup.object().shape({
  //   user: Yup.string().required(),
  //   email: Yup.string().required(),
  //   options: Yup.string().notOneOf(["Option Required"]).required()
  // }),




  handleSubmit(values, { props, resetForm }) {
    // uncomment if backend true
    // const params = {
    //   username: values.user,
    //   password: values.password,
    //   email: values.email
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

    // uncomment if backend true
    // axios

    //   .post("https://food-truck-finder-rj.herokuapp.com/api/register", params)
    //   .then(response => {
    //     localStorage.setItem('token', response.data.token);
    //     localStorage.setItem('user', response.data.user.id);
    //     props.history.push("/trucks")
    //     resetForm();
    //   })
    //   .catch(error => {
    //     alert(error.message)
    //   });
  }
})(RegisterForm);



export default FormikRegisterForm;