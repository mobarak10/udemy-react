import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
    return (
        <div className="UseOutput">
            <p>username: {props.userName}</p>
            <p>I hope this will work fine</p>
        </div>
    )
}

export default UserOutput;