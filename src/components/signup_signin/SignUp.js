import React, { useState } from 'react';
import './signin_signup.css';
import BlackLogo from '../../images/BlackLogo.png';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const [userData, setUserData] = useState({
    fname:"",
    email:"",
    mobile:"",
    password:"",
    passwordAgain:""
  });

  console.log(userData);

  const addData = (e) => {
    const {name, value} = e.target;
    setUserData(() => {
      return {
        ...userData,
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
            <h1>Create Account</h1>
            <div className="form_data">
              <label htmlFor="fname">Your Name</label>
              <input 
               type="text" 
               onChange={addData}
               value={userData.fname}
               name="fname" 
               id="fname" 
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input 
               type="text" 
               value={userData.email}
               onChange={addData}
               name="email" 
               id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Mobile Number</label>
              <input 
               type="number" 
               onChange={addData}
               value={userData.mobile}
               name="mobile" 
               id="mobile"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input 
               type="password" 
               placeholder="At least 6 character" 
               onChange={addData}
               value={userData.password}
               name="password" 
               id="password"
              />
            </div>
            <div className="form_data">
              <label htmlFor="passwordAgain">Password Again</label>
              <input 
               type="password" 
               onChange={addData}
               value={userData.passwordAgain}
               name="passwordAgain" 
               id="passwordAgain"
              />
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
  )
}

export default SignUp;