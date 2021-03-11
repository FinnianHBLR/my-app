import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

//NOTE. You have to use className not class.
//Onclick is with a capital C.
class App extends Component {
  //State is managed from inside compontent. This must extend component. Be careful with states.
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other data'
  }

  switchNameHandler = () => {
    //console.log('Was clicked.');
    //DONT DO THIS: this.state.persons[0].name = "MaxiBoy";
    this.setState({
      persons: [
        { name: 'MaxiBoy', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React</h1>
        <p>This is really working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    //Will be compiled to -- return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing.'));

  }
}

export default App;
