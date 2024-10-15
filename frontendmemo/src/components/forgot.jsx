import React from 'react'
import '../Styles/forgot.css'

const forgot = () => {
  return (
    <div className='forgot'>
      
      <h1>Forgot Password</h1>
      <p>Please enter your email address to reset your password.</p>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button className='login-button2' type="submit">Reset Password</button>
      </form>

      <p>
        <a className='link' href="/src/pages/Login.jsx">Back to Login</a>
      </p>
      
    </div>
  )
}

export default forgot
