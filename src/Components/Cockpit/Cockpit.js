import React, {useEffect} from "react";
import classes from "./Cockpit.css"
 
const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request....
        setTimeout(() => {
            alert('Save Data!');
        }, 1000);
    }, [props.persons]);

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>
                {(props.showPersons !== true) ? 'show Value' : 'hide value'}
            </button>
        </div>
    );
};

export default Cockpit;