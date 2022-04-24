import React from "react";

function Button(props){
    const text = props.text;
    return(
        <div className="login">

            <p> {text} </p>

        </div>
    )
}

export default Button;