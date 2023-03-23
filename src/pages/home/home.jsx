import React from 'react';
import './home.css';
import logo from '../../images/logo.svg';
import Clock from '../clock/clock';
export default class Home extends React.Component {

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Clock />
        </header>
      </div>
    );
  }

}