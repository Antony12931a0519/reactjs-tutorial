import React from 'react';
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Hello Am {props.name} and my age is {props.age}</p>
            <p >{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};
export default person;