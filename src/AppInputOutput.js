import React from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends React.Component {
    state = {
        username: "joy khan"
    };

    changeNameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    render () {
        return (
            <div className="App">
                <ol>
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                    <li>link 4</li>
                    <li>link 5</li>
                    <li>link 6</li>
                </ol>

                <UserInput changed={this.changeNameHandler} defaultValue={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName={this.state.username} />
            </div>
        )
    }
}

export default App;
