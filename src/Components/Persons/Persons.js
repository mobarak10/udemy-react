import React, {PureComponent} from "react";
import Person from "./Person/Person";

class Persons extends PureComponent{
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nestState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.children ||
    //         nextProps.clicked !== this.props.clicked
    //         ){
    //         return true;
    //     }else{
    //         return false;
    //     }
    //     // return true;
    // }

    getSnapshotBeforeUpdate(preProps, preState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'snapshot'};
    }

    componentDidUpdate(preProps, preState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount'); 
    }

    render(){
        console.log('[Persons.js] rendering....');
    
        return this.props.persons.map((person, index) => {
            return <Person 
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}

export default Persons;