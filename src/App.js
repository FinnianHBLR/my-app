import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

//NOTE. You have to use className not class.
//Onclick is with a capital C.

//State is managed from inside compontent. This must extend component. Be careful with states.

const App = props => {
  //Retuns two elemenents. The first element you get back is the first state. The second element is a function to update the state. Get/set.
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other data'
  });

  const switchNameHandler = () => {
  //console.log('Was clicked.');
  //DONT DO THIS: this.state.persons[0].name = "MaxiBoy";
  setPersonsState({
    persons: [
        { name: 'MaxiBoy', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm React</h1>
      <p>This is really working.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  //Will be compiled to -- return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing.'));
}


export default App;

