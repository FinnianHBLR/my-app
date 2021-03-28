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
  };

  switchNameHandler = (newName) => {
    //console.log('Was clicked.');
    //DONT DO THIS: this.state.persons[0].name = "MaxiBoy";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

//Always use => for handlers as this can refrence something else. 
  nameChangedHandler = (event) => {
    //console.log('Was clicked.');
    //DONT DO THIS: this.state.persons[0].name = "MaxiBoy";
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  //Arrow functions return a fucntion that gets exce. Use the bind syntax because it is better.
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    return (
      <div className="App">
        <h1>Hi, I'm React</h1>
        <p>This is really working.</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maxiboi')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maxxx')}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );

    //Will be compiled to -- return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing.'));

  }
}

export default App;
