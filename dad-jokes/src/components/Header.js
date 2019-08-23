import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  const token = localStorage.getItem('token');


  return (
    <div className="header">
    <Link to="/">
      <h1><a href="#">Dad Jokes</a></h1>
    </Link>
      <div className="user-onboarding">
        <Link to="/register">
          {token ? null : 'Sign Up'}
        </Link>
        <Link to="/login">
          {token ? null : 'Sign In'}
        </Link>
        {token 
        ? <Link to ="/" onClick={() => localStorage.removeItem('token')}>Log Out</Link> 
        : null}
      </div>
    </div>
  )
}


export default Header