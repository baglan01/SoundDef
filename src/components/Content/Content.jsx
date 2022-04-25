import React from "react";
import DownloadPart from "./DownloadPart";
import Divider from "../SubComponents/Divider";
import Main from "./Main";

function Content(){
    return(
        <div className={`Content`}>
            <Main/>
            <Divider/>
            <DownloadPart/>
        </div>
    )
}

export default Content;