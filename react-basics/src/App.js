import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      { name: "Antony", age: "10" },
      { name: "Sampath", age: "11" },
      { name: "Kumar", age: "12" },
      { name: "Reddy", age: "13" }


    ]
  }

  switchHandler = (Antony) => {
    this.setState(
      {
        person: [
          { name: Antony, age: "10" },
          { name: "2", age: "11" },
          { name: "3", age: "12" },
          { name: "4", age: "13" }


        ]
      }
    )
  }


  changeHandler = (event) => {
    this.setState(
      {
        person: [
          { name:event.target.value, age: "10" },
          { name: "2", age: "11" },
          { name:"", age: "12" },
          { name: "4", age: "13" }


        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Welcome to the world of React</h1>

        <button
         onClick={this.switchHandler.bind(this,"new name")}
         >Switcher</button>

        <Person 
        name={this.state.person[0].name} 
        age={this.state.person[0].age}>
        </Person>

        <Person
         name={this.state.person[1].name}
          age={this.state.person[1].age}
          ></Person>

        <Person
         click= {this.switchHandler.bind(this,"Hello")}
          name={this.state.person[2].name} 
          age={this.state.person[2].age}
          changed={this.changeHandler}
          ></Person>

        <Person 
        click= {this.switchHandler.bind(this,"Hiii")} 
        name={this.state.person[3].name} 
        age={this.state.person[3].age}
        changed={this.changeHandler}
        ></Person>
      </div>
    );
  }
}

export default App;
