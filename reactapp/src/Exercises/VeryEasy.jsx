// Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.

import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>React Guided Inquiry</h1>
        <h2>Very Easy</h2>

        <div className="Person">
          <p>Name: Steve</p>
          <p>Number: 21423412</p>
          <p>BirthDate: 06/24/2000</p>
        </div>
      </div>
    )
  }
}

export default App;