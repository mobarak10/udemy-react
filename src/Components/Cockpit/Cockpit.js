import React, {useEffect} from "react";
import classes from "./Cockpit.css"
 
const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request....
        const timer = setTimeout(() => {
            alert('Save Data!');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup works in useEffect'); 
        }
    }, []);

    useEffect( () => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup works in 2nd useEffect'); 
        }
    })

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.personLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if(props.personLength <= 1) {
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

export default React.memo(Cockpit);