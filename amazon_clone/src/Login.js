import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img src='https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png'/>
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text'/>
          <h5>Password</h5>
          <input type='password'/>

          <button className='login__signinButton'>Sign In</button>
        </form>

        <p>
          By signing-in you are agree to Amazon's Condition to use & sale. Please see our Privacy Notice, our Cookies and our interest-base Ads Notice.
        </p>

        <button className='login__registerButton'>Create your Amazon Account</button>

      </div>
    </div>
  )
}

export default Login
