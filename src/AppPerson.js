import React from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
    state = {
        person: [
            { name: "Joy", age: 24 },
            { name: "Mobarak", age: 25 },
            { name: "Shibbir", age: 24 },
        ]
    }

    nameChangeHandler = (newName) => {
        this.setState  ({
            person: [
                { name: newName, age: 24 },
                { name: "Mobarak", age: 25 },
                { name: "Joy", age: 90 },
            ]
        })
    }

    selectedNameChangeHandler = (event) => {
        this.setState  ({
            person: [
                { name: "Baky", age: 24 },
                { name: event.target.value, age: 25 },
                { name: "Joy", age: 90 },
            ]
        })
    }
    render (){
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }
        return (
            <div className="App">
                <h1>Hi I am React App</h1>
                <p>This is really working</p>
                <button 
                    style={style}
                    onClick={this.nameChangeHandler.bind(this, "baky")}>
                    Change Value
                </button>
                <Person 
                    name={this.state.person[0].name} 
                    age={this.state.person[0].age} />
                <Person 
                    click = {this.nameChangeHandler.bind(this, "joy")}
                    name={this.state.person[1].name} 
                    change={this.selectedNameChangeHandler}
                    age={this.state.person[1].age}>
                    My hobbie: Reading Book
                </Person>
                <Person 
                    name={this.state.person[2].name} 
                    age={this.state.person[2].age} />
            </div>
        );
    }
    // return React.createElement("div", {className: 'App'}, React.createElement ("h1", null, "Hi i'm a react app"));
}

export default App;
