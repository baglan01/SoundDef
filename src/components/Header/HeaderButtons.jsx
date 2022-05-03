import React from "react";
import Button from "../SubComponents/Button";

function HeaderButtons({isAuthorizedTwo , loginModalActive , setLoginModalActive , ...rest}){



    if(isAuthorizedTwo){
        return(
            <div className="profileAndLogOut">
                <Button onClick={ () => {} } text='Profile'/>
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