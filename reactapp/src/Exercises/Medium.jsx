// Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)

import { Component } from 'react';
import './App.css';
import Info from './Info';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      person: {
        name: 'Steve',
        phoneNumber: 21423412,
        birthDate: '06/24/2000'
      }
    }
  }

  render() {
    return(
      <div className="App">
        <h1>React Guided Inquiry</h1>

        <Info
          name={this.state.person.name}
          phoneNumber={this.state.person.phoneNumber}
          birthDate={this.state.person.birthDate}
        />

      </div>
    )
  }
}

export default App;