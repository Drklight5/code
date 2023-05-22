import React from "react";

function Elemento (props){
    return (
        <React.Fragment>
            <li>{props.text}</li>
        </React.Fragment>
    );
}
export { Elemento };