import React from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from 'radium';

class App extends React.Component {
    state = {
        persons: [
            { id: 1, name: "Joy", age: 24 },
            { id: 2, name: "Mobarak", age: 25 },
            { id: 3, name: "Shibbir", age: 24 },
        ],
        showPersons: false
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const NewPerson = [...this.state.persons];
        NewPerson[personIndex] = person;

        this.setState  ({
            persons: NewPerson
        })
    }

    deletePersonHandler = (personIndex) => {
        // const newPerson = this.state.persons;
        // const newPerson = this.state.persons.slice();
        const newPerson = [...this.state.persons]; // up 2 and this return same result
        newPerson.splice(personIndex, 1);
        this.setState({persons: newPerson});
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render (){
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ":hover": {
                backgroundColor: 'lightgreen',
                color: 'black',
            }
        }

        let person = null;
        if (this.state.showPersons){
            person = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            name={person.name}
                            age={person.age}
                            click={() => this.deletePersonHandler(index)}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)}
                        />
                    })}
                </div>
            );
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        };

        const classes = [];

        if(this.state.persons.length <= 2) {
            classes.push('red');
        }
        if(this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi I am React App</h1>
                <p className={classes.join('')}>This is really working</p>
                <button 
                    style={style}
                    onClick={this.togglePersonHandler}>
                    {(this.state.showPersons !== true) ? 'show Value' : 'hide value'}
                </button>
                {person}
            </div>
        );
    }
    // return React.createElement("div", {className: 'App'}, React.createElement ("h1", null, "Hi i'm a react app"));
}

export default Radium(App);
