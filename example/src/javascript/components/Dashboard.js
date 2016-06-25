import React from 'react'

const Dashboard = ({
  logOut
}) => (
  <div>
    <h1> buy c3p0 </h1>
    <button onClick={() => logOut()}> Log Out </button>
  </div>
)

export default Dashboard
