import React, { useState } from 'react'
import '../styles/FormStyles.css'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const SignIn = ({history}) => {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })
  const [isloading, setIsLoading] = useState(false)

  const token = localStorage.getItem('token')

  if(token){
    return <Redirect to ="/jokes"/>
  }
  if(isloading === true){
    return <div> Loading...</div>
  }

  const handleChange = e => {
    console.log(`${e.target.name}`, e.target.value)
    setInput({
      ...input, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(input);
    
    axios
    .post('http://localhost:3300/api/auth/login', input)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      history.push('/jokes')
    })
  }

  return (
    <div className="forms-container">
    <h2>Sign In</h2>
      <form className="form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter a Username"
            name="username"
            value={input.username}
            onChange={handleChange}
          />
          <input 
            type="password" 
            placeholder="Enter a Password"
            name="password"
            value={input.password}
            onChange={handleChange}

          />
        <button className="button">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn