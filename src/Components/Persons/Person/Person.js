import React from "react";
import "./Person.css";

class Person extends React.Component {
    render(){
        console.log('[Persons.js] rendering....');
        return (
            <div className="Person">
                <h2 onClick={this.props.click}>
                    I'm {this.props.name} and i'm {this.props.age} years old
                </h2>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </div>
        );
    }
}

export default Person;
