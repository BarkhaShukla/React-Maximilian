import React from 'react';

const person = (props) => {
    return (
        <div>
            <h4> Hi, I'm {props.name} and I'm {props.age} years old </h4>
            <p> {props.children} </p>
        </div>
    )

}

export default person;