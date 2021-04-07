import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person.js';

//NOTE. You have to use className not class.
//Onclick is with a capital C.
class App extends Component {
  //State is managed from inside compontent. This must extend component. Be careful with states.
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other data',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    //Get all persons
    //You MUST use slice() or spread to copy the old array to the const. This avoids directly editing the state.
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    //Removing the one element 
    persons.splice(personIndex, 1);
    //Using this to set the state.
    this.setState({persons: persons});
  }

  //Always use => for handlers as this can refrence something else. 
  nameChangedHandler = (event, id) => {
    //console.log('Was clicked.');
    //DONT DO THIS: this.state.persons[0].name = "MaxiBoy";
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //Distribute all properties from object into this const. SO YOU DO NOT MUTATE the state
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    //OLD: const person = Object.assign({}, this.state.persons[personIndex]);

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  //You have to assign ana arrow function to this property so it can be called. This means "this" is always this class.
  togglePersonsHandler = () => {
    //Flip flop
    //This merges into the JSON.
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  //Arrow functions return a fucntion that gets exce. Use the bind syntax because it is better.
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    //Default
    let persons = null;
    //This checks every time there is a re-render.
    //Maps every element in an array into something else. E.g. map will be on each array. This is also conditional this time.
    //If you use a => in the click you can pass things in.
    //The key needs to be something unique
    //Event is from the Person class.
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} 
            key={person.id} 
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm React</h1>
        <p className={classes.join(' ')}>This is really working.</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Names</button>
        {persons}
      </div>
      </StyleRoot>
    );

    //Will be compiled to -- return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing.'));

  }
}
//Need to wrap the component in Radium.
export default Radium(App);
