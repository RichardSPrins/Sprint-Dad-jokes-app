import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Joke from './Joke'

const JokeList = ({history}) => {
  const [jokes, getJokes] = useState([]);
  const token = localStorage.getItem('token');
  const url = 'http://localhost:3300/api/jokes';

  useEffect(() => {
    if(token){
      axios
      .get(url, {
          headers: {
            Authorization: `${token}`
          }
        })
        .then(res => {
          console.log(res.data)
          getJokes(res.data)
        })
        .catch(err => {
          console.log(err)
          localStorage.removeItem('token')
          history.push('/')
        })
    }
  }, [history])

  return (
    <div>
      {jokes.map(joke => {
        return (
          <div>
            <Joke joke={joke}/>
          </div>
        )
      })}
    </div>
  )
}

export default JokeList;