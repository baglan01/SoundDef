import React from "react";
import DownloadPart from "./DownloadPart";
import Divider from "../SubComponents/Divider";
import Main from "./Main";
import About from "./About";

function Content(){
    return(
        <div className={`Content`}>
            <Main/>
            <Divider/>
            <About/>
            <Divider/>
            <DownloadPart/>
        </div>
    )
}

export default Content;