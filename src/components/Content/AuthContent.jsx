import React from "react";
import Main from "./Main";
import Divider from "../SubComponents/Divider";
import DownloadPart from "./DownloadPart";
import Upload from "./Upload";

const AuthContent = () =>{
    return(
        <div className={`Content`}>
            <Main/>
            <Divider/>
            {/*<DownloadPart/>*/}
            {/*<Divider/>*/}
            <Upload/>
        </div>
    )
}

export default AuthContent;