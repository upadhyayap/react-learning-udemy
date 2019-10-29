import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    persons : [
      {name : "Anand", age:30},
      {name : "Aditya", age:40}
    ]
  }

  switchNameHandler = (newName) => {
    console.log('clicked');
    this.setState({
      persons : [
        {name : newName, age:31},
        {name : "Aditya", age:40}
      ],
      showPersons : false
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name : "Anand", age:31},
        {name : event.target.value, age:40}
      ]
    });
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <div>
            {
              this.state.persons.map((person, index) => {
                return <Person 
                name ={person.name} 
                click = {this.deletePersonHandler(index)} 
                age={person.age}/>
              })
            }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button 
          onClick={this.togglePersonsHandler} className="btn btn-primary">
            Toggle Persons
        </button>

        {persons}

      </div>
    );
  }
}

export default App;
