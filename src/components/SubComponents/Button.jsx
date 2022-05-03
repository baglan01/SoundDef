import React from "react";

function Button({text, onClick, ...rest}){


    return(
        <button onClick={onClick} className="login">

            <p> {text} </p>

        </button>
    )
}

export default Button;