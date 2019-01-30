import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonCounter from './ButtonCounter';

const happy = <h2>I am happy</h2>;

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="Ciao">
            <h1>Prima app in react</h1>
          </div>
        <ButtonCounter />
      </React.Fragment>
    );
  }
}

export default App;
