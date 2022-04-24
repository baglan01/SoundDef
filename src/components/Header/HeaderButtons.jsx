import React from "react";
import Button from "../Content/ContentSubComponents/Button";

function HeaderButtons(props){

    if(props.isAuthorizedTwo){
        return(
            <div className="profileAndLogOut">
                <Button text='Profile'/>
                <Button text='Log Out'/>
            </div>
        )
    }else{
        return(

            <div className="loginAndSignUp">
                <Button text='login'/>
                <Button text='Sign Up'/>
            </div>
        )
    }

}

export default HeaderButtons;