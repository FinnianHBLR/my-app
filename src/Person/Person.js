//We do not need component as we are not suing a class that enxtends component.
import React from 'react';
import './Person.css';
import styled from 'styled-components';

//JS code has to be run with {}. This is NOT JSX, only one line expressions. You could call a function though.
//{} Means dynamic
//Children is a reserved word.

//props.click calls the method switcHandler
//props.changed clals the nameChangedHandler at the end.
//The state is passed down to the person from the array[num]. This then gets that name from the state.

// This creates a css class and adds it to the div. This means it isn't in-line.
const StyledDiv = styled.div`
            width: 60%;
            margin: auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
            margin-top: 16px;
                
            @media (min-width: 500px) {        
                    width: 450px;
            }
`;

const person = (props) => {
    //Uses Radium to stop resizing unless below 500px.
    /*
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    */

    return (
        //<div className="Person" style={style}>
        <StyledDiv>
            < p onClick={props.click} > I'm a {props.name} and I am {props.age} years old</p>
            < p > {props.children}</p >
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )

};

export default person;