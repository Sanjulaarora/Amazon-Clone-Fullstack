import React, { useState } from 'react';
import './signin_signup.css';
import BlackLogo from '../../images/BlackLogo.png';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  };

  const senddata = async(e) => {
    e.preventDefault();
    const {fname, email, mobile, password, passwordAgain} = userData;

    if(fname === ""){
      toast.warning('Please Provide Your Name', {
        position: "top-center",
      });
    } else if(email === ""){
      toast.warning('Please Provide Email', {
        position: "top-center",
      });
    } else if(mobile === ""){
      toast.warning('Please Provide Mobile Number', {
        position: "top-center",
      });
    } else if(password === ""){
      toast.warning('Please Provide Password', {
        position: "top-center",
      });
    } else if(passwordAgain === ""){
      toast.warning('Please Provide Password Again', {
        position: "top-center",
      });
    }

    const res = await fetch("/sign-up",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        fname, email, mobile, password, passwordAgain
      })
    });

    const data = await res.json();
    //console.log(data);
    if(res.status === 422 || !data){
      //alert("no data");
      toast.warning('Invalid Details', {
        position: "top-center",
      });
    } else {
      //alert("data successfull");
      toast.success('Data Added Successfully', {
        position: "top-center",
      });
      setUserData({...userData, fname:"", email:"", mobile:"", password:"", passwordAgain:""});
    }
  }

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src={BlackLogo} alt="amazon_logo" />
        </div>
        <div className="sign_form">
          <form method='POST'>
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
            <button className="signin_btn" onClick={senddata}>Continue</button>
            <ToastContainer />
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