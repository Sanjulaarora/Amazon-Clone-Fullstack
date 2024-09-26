import React from 'react';
import './signin_signup.css';
import BlackLogo from '../../images/BlackLogo.png';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src={BlackLogo} alt="amazon_logo" />
          </div>
          <div className="sign_form">
            <form>
              <h1>Create Account</h1>
              <div className="form_data">
                <label htmlFor="Your Name">Your Name</label>
                <input type="text" name="Your Name" id="Your Name"/>
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"/>
              </div>
              <div className="form_data">
                <label htmlFor="Mobile Number">Mobile Number</label>
                <input type="number" name="Mobile Number" id="Mobile Number"/>
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="At least 6 character" name="password" id="password"/>
              </div>
              <div className="form_data">
                <label htmlFor="password again">Password Again</label>
                <input type="password" name="password again" id="password again"/>
              </div>
              <button className="signin_btn">Continue</button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to='/sign-in'>SignIn</NavLink>
              </div> 
            </form>
          </div>   
        </div>
      </section>
    </>
  )
}

export default SignUp;