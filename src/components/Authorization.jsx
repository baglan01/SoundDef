import './Authorization.css';
import SignUp from "./AuthorizationComponents/SignUp";
import Login from "./AuthorizationComponents/Login";
import {useState} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Authorization = ({toLogin ,setToLogin , authorized , setAuthorized}) =>  {



    return (
        <div className="Authorization">
            {toLogin ? (
                <Login toLogin={toLogin} setToLogin={setToLogin} authorized={authorized} setAuthorized={setAuthorized}/>

            ) : (
                <SignUp toLogin={toLogin} setToLogin={setToLogin} authorized={authorized} setAuthorized={setAuthorized}/>
            )
            }
        </div>
    );
}

export default Authorization;
