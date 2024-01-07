import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { Link } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
 const navigate = useNavigate();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const signIn = e => {
  e.preventDefault();

  auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
           navigate.push('/')
      })
      .cathc(error => alert(error.message))
}

const register = e => {
  e.preventDefault();

  auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate.push('/')
        }
      })
      .catch(error => alert(error.message))

}

  return (
    <div className='login'>
      <Link to='/'>
        <img
         src='https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png'/>
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange=
          {e => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type='password'value={password} onChange=
          {e => setPassword(e.target.value)}/>

          <button onClick={register}
           className='login__signinButton'>Sign In</button>
        </form>

        <p>
          By signing-in you are agree to Amazon's Condition to use & sale. Please see our Privacy Notice, our Cookies and our interest-base Ads Notice.
        </p>

        <button type='submit' onClick={signIn}
        className='login__registerButton'>Create your Amazon Account</button>

      </div>
    </div>
  )
}

export default Login
