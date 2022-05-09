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


const Authorization = () =>  {

    const [toLogin , setToLogin] = useState(true);


    return (
        <div className="Authorization">
            {toLogin ? (
                <Login toLogin={toLogin} setToLogin={setToLogin}/>

            ) : (
                <SignUp toLogin={toLogin} setToLogin={setToLogin}/>
            )
            }
        </div>
    );
}

export default Authorization;
