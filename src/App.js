import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header'
import Banner from './banner'
import Profile from './profile'
import Portfolio from './portfolio'
import Experience from './experience'
import Skills from "./skills";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <Profile/>
        <Experience/>
        <Skills/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
