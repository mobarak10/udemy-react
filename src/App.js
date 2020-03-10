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
    render (){
        return (
            <div className="App">
                <h1>Hi I am React App</h1>
                <p>This is really working</p>
                <Person name={this.state.person[0].name} age={this.state.person[0].age} />
                <Person name={this.state.person[1].name} age={this.state.person[1].age}>
                    My hobbie: Reading Book
                </Person>
                <Person name={this.state.person[2].name} age={this.state.person[2].age} />
            </div>
        );
    }
    // return React.createElement("div", {className: 'App'}, React.createElement ("h1", null, "Hi i'm a react app"));
}

export default App;
