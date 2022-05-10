import React from "react";
import DownloadPart from "./DownloadPart";
import Divider from "../SubComponents/Divider";
import Main from "./Main";
import About from "./About";
import Features from "./Features";
import Alternatives from "./Alternatives";

function Content(isAuthorized , setAuthorized){
    return(
        <div className={`Content`}>
            <Main/>
            <Divider/>
            <About/>
            <Divider/>
            <Features/>
            <Divider/>
            <Alternatives/>
        </div>
    )
}

export default Content;