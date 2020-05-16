import React from "react";
import "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit"
import Radium from 'radium';

class App extends React.Component {
    constructor(props){
        super(props);
        console.log('[App.js] Constructor');
    }

    state = {
        persons: [
            { id: 1, name: "Joy", age: 24 }, 
            { id: 2, name: "Mobarak", age: 25 },
            { id: 3, name: "Shibbir", age: 24 },
        ],
        showPersons: false
    }

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // componentWillMount(){ 
    //     console.log('[App.js] ComponentWillMount');
    // }

    componentDidMount(){
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(){
        console.log('[App.js] componentDidUpdate');
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
        console.log('[App.js] render....');
        let person = null;
        if (this.state.showPersons){
            person = 
                <Persons
                    persons = {this.state.persons}
                    clicked = {this.deletePersonHandler}
                    changed = {this.nameChangeHandler} 
                />;

            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            // }
        };

        return (
            <div className='App'>
                <Cockpit 
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}
                />
                {person}
            </div>
        );
    }
    // return React.createElement("div", {className: 'App'}, React.createElement ("h1", null, "Hi i'm a react app"));
}

export default Radium(App);
