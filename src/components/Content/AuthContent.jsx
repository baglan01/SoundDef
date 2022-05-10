import React from "react";
import Main from "./Main";
import Divider from "../SubComponents/Divider";
import DownloadPart from "./DownloadPart";

const AuthContent = () =>{
    return(
        <div className={`Content`}>
            <Main/>
            <Divider/>
            <DownloadPart/>
        </div>
    )
}

export default AuthContent;