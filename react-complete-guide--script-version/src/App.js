import React, { Component } from 'react';
// import logo from './lo go.svg';
import Person from './Person/Person';
import Validation from './ValidationComponent/validationComponent';
import './App.css';

class App extends Component {
  state = {
    userInput: {value:'',title:'Input'},
    persons: [
      { id:'s23', name: 'Alice', age: 21 },
      { id: 's21',name: 'Bob', age: 24 },
      { id: 's22',name: 'Carlo', age: 25 }
    ]
  }

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (idx) =>{
    const persons = [...this.state.persons];
    persons.splice(idx,1);
    console.log(persons)
    this.setState({persons:persons});
  }

  nameChangedHandler = (event,idx) => {
    const personIdx = this.state.persons.findIndex(p=>{
      return p.id === idx;
    });

    const person = {...this.state.persons[personIdx]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIdx] = person;

    this.setState({persons:persons});
  }

  inputValidationHandler = (event) => {
    let userInput = {...this.state.userInput};
    userInput.value = event.target.value;
    this.setState({ userInput: userInput});
  }

  render() {
    let persons = null;
    persons = (
      <div>
        {this.state.persons.map((person,idx) => {
          return <Person click={() => this.deletePersonHandler(idx)} 
          name={person.name} 
          age={person.age} 
          key={person.id} 
           changed={(event)=>this.nameChangedHandler(event,person.id)}
          ></Person>
        })}
         </div>
    );

    return (
      <div className="App" >
        <h1>React studium</h1>
        <button onClick={this.togglePersonHandler} className="btn-primary">Show/Hide persons</button>
        { this.state.showPersons ? persons : null}
        
        <div className="card">
          <label>{this.state.userInput.title}</label>
          <input type="text" onChange={this.inputValidationHandler} value={this.state.userInput.value} />
          <Validation inputLength={this.state.userInput.value} />
          {/* <p>{this.state.userInput}</p> */}

        </div>
      </div>      
    );
  }
}

export default App;