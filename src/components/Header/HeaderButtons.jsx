import React from "react";
import Button from "../SubComponents/Button";

function HeaderButtons({isAuthorizedTwo , loginModalActive , setLoginModalActive}){

    if(isAuthorizedTwo){
        return(
            <div className="profileAndLogOut">
                <Button text='Profile'/>
                <Button text='Log Out'/>
            </div>
        )
    }else{
        return(

            <div className="loginAndSignUp">
                <Button text='login' />
                <Button text='Sign Up'/>
            </div>
        )
    }

}

export default HeaderButtons;