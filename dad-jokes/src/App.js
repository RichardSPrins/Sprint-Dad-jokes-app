import React from 'react';
import './App.css';
import Header from './components/Header';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import JokeList from './components/JokeList';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header}/>
      <Route exact path="/" component={HomePage}/>      
      <Route exact path="/register" component={SignUp}/>
      <Route exact path="/login" component={SignIn}/>
      <Route  exact path="/jokes" component={JokeList}/>
    </div>
  );
}

export default App;
