import React from 'react'
import {Redirect} from 'react-router-dom'
import '../styles/HomePage.css'

const HomePage = () => {
  const token = localStorage.getItem('token')
  if(token){
    return <Redirect to="/jokes"/> 
  }

  return (
    <div className="home-page">
      <p> Create an account and have access to the web's best repository of dad jokes</p>
    </div>
  )
}

export default HomePage