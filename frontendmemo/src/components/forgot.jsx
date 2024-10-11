import React from 'react'
import '../styles/forgot.css'

const forgot = () => {
  return (
    <div>
      
      <h1>Forgot Password</h1>
      <p>Please enter your email address to reset your password.</p>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Reset Password</button>
      </form>

      <p>
        <a href="/">Back to Login</a>
      </p>
      
    </div>
  )
}

export default forgot
