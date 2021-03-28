//We do not need component as we are not suing a class that enxtends component.
import React from 'react';
import './Person.css';
//JS code has to be run with {}. This is NOT JSX, only one line expressions. You could call a function though.
//{} Means dynamic
//Children is a reserved word.

//props.click calls the method switcHandler
//props.changed clals the nameChangedHandler at the end.
//The state is passed down to the person from the array[num]. This then gets that name from the state.
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )

};

export default person;