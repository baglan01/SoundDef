import React from "react";
import DownloadPart from "./DownloadPart";
import Divider from "./ContentSubComponents/Divider";

function Content(){
    return(
        <div className={`Content`}>
            <Divider/>
            <DownloadPart/>
        </div>
    )
}

export default Content;