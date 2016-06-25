import React from 'react'

const LogInPage = ({
}) => (
  <div>
    <h1> Log In </h1>
    <input type='text' placeholder='email' />
    <input type='password' placeholder='password' />
    <button onClick={() => console.log('CLICK')}> Log In </button>
  </div>
)

export default LogInPage
