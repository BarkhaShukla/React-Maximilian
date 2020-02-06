import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Max2", age: 28 },
      { name: "Max3", age: 28 }
    ],
    otherState: 'testing value'
  }

  submitHandler = () => {
    //console.log("Click!!");
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Max2", age: 28 },
        { name: "Steph", age: 28 }
      ]
    })
  }
  render() {
    return (<div className="App" >
      <h1> Hi!I'm a React App</h1> <p> This is really working! </p>
      <button className='submit' onClick={this.submitHandler} > Switch Name </button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    </div>
    );
  }
}
export default App;