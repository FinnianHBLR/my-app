//We do not need component as we are not suing a class that enxtends component.
import React from 'react';

//JS code has to be run with {}. This is NOT JSX, only one line expressions. You could call a function though.
//{} Means dynamic
//Children is a reserved word.
//STATELESS, or "dumb". Use as many of these as possible.
const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )

};

export default person;