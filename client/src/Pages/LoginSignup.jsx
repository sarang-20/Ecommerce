import React from 'react'
import '/Users/sarangaghara/Desktop/E-commerce/frontend/client/src/Pages/css/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'> 
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input tyoe="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>

        <button>Continue</button>
        <p className='loginsignup-login'>Already Have an account?<span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing , i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
