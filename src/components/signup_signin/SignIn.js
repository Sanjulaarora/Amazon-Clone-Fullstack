import React, { useState } from 'react';
import './signin_signup.css';
import BlackLogo from '../../images/BlackLogo.png';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  const [logData, setLogData] = useState({
    email:"",
    password:""
  });

  const addData = (e) => {
    const {name, value} = e.target;
    setLogData(() => {
      return {
        ...logData,
        [name]:value
      }
    })
  }

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src={BlackLogo} alt="amazon_logo" />
        </div>
        <div className="sign_form">
          <form>
            <h1>Sign-In</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input 
               type="text" 
               onChange={addData}
               value={logData.email}
               name="email" 
               id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input 
               type="password" 
               placeholder="At least 6 character" 
               onChange={addData}
               value={logData.password}
               name="password" 
               id="password"
              />
            </div>
            <button className="signin_btn">Continue</button>
          </form>
        </div>   
          <div className="create_accountinfo">
            <p>New to Amazon?</p>
            <button><NavLink to='/sign-up'>Create your Amazon Account</NavLink></button>
          </div>
      </div>
    </section>
  )
}

export default SignIn;