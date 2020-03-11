import React from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
    state = {
        persons: [
            { id: 1, name: "Joy", age: 24 },
            { id: 2, name: "Mobarak", age: 25 },
            { id: 3, name: "Shibbir", age: 24 },
        ],
        showPersons: false
    }

    nameChangeHandler = (newName) => {
        this.setState  ({
            persons: [
                { name: newName, age: 24 }
            ]
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
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
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
                    {/* <Person 
                        name={this.state.persons[0].name} 
                        age={this.state.persons[0].age} />
                    <Person 
                        click = {this.nameChangeHandler.bind(this, "joy")}
                        name={this.state.persons[1].name} 
                        change={this.selectedNameChangeHandler}
                        age={this.state.persons[1].age}>
                        My hobbie: Reading Book
                    </Person>
                    <Person 
                        name={this.state.persons[2].name} 
                        age={this.state.persons[2].age} /> */}
                </div>
            )
        }
        return (
            <div className="App">
                <h1>Hi I am React App</h1>
                <p>This is really working</p>
                <button 
                    style={style}
                    onClick={this.togglePersonHandler}>
                    show Value
                </button>
                {person}
            </div>
        );
    }
    // return React.createElement("div", {className: 'App'}, React.createElement ("h1", null, "Hi i'm a react app"));
}

export default App;
