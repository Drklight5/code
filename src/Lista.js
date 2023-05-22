import React from "react";

function Lista(props){
    return(
        <React.Fragment>
            <ul>
                {props.children}
            </ul>
        </React.Fragment>
    );
};

export {Lista};