import React from 'react';
import './css/LoginSignUp.css';

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
         <h1>Sign Up</h1>
         <div className="loginsignup-fields">
           <input type="text" placeholder='Your Name' />
           <input type="email" placeholder='Email Address' name="" id="" />
           <input type="password" placeholder='Password' name="" id="" />
         </div>
         <button>Continue</button>
         <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
         </p>
         <div className="loginsignup-agree">
           <input type="checkbox" name="" id="" />
           <p>By continuing, i agree to the tems of use & privacy policy</p>
         </div>
      </div>
    </div>
  )
}

export default LoginSignUp
