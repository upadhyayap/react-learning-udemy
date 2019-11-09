import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    persons : [
      {id : '1', name : "Anand", age:30},
      {id : '2', name : "Aditya", age:40},
      {id : '3', name : "Shreya", age:20}
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

  nameChangeHandler = (event, id) => {
    const persons = [...this.state.persons];
    const person = persons.find(person => person.id === id);
    person.name = event.target.value;
    this.setState({persons : persons});
    // this.setState({
    //   persons : [
    //     {name : "Anand", age:31},
    //     {name : event.target.value, age:40}
    //   ]
    // });
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  render() {

    const style = {
        backgroundColor : 'green',
        color : 'white',
        font : 'inherit',
        border : '1px solid blue',
        padding : '8px',
        cursor : 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <div>
            {
              this.state.persons.map((person, index) => {
                return <Person 
                name ={person.name} 
                click = {() => {this.deletePersonHandler(index)}} 
                age={person.age} key = {person.id} 
                clicked = {(event) => this.nameChangeHandler(event, person.id)}/>
              })
            }
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button 
          onClick={this.togglePersonsHandler} style={style}>
            Toggle Persons
        </button>

        {persons}

      </div>
    );
  }
}

export default App;
