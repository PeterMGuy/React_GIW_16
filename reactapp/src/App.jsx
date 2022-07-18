// Hard

// Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)

import React, { Component } from 'react';
import './App.css';
import Info from './Info';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      people: [
        {
          name: 'Sasuke',
          phoneNumber: ' 123-123-1234',
          birthDate: ' 01/09/2000'
        },
        {
          name: 'Tauren',
          phoneNumber: ' 123-321-2314',
          birthDate: ' 07/12/1911'
         },
         {
          name: 'Ares',
          phoneNumber: ' 321-231-1234',
          birthDate: ' 07/21/1922'
         },
         {
          name: 'Haku',
          phoneNumber: ' 089-534-4567',
          birthDate: ' 05/12/1933'
         }
      ]
    }
  }

  render() {
    const P = this.state.people.map((person, i)=> {
        return (
          <Info
            key={i}
            //key to id specific component 
            name={person.name}
            phoneNumber={person.phoneNumber}
            birthDate={person.birthDate} 
          />
        );
    })


    return(
      <div className="App">
        <h1>React Guided Inquiry</h1>
        {P}
      </div>
    )
  }
}

export default App;