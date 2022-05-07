import React from "react";
import DownloadPart from "./DownloadPart";
import Divider from "../SubComponents/Divider";
import Main from "./Main";
import About from "./About";
import Features from "./Features";

function Content(isAuthorized , setAuthorized){
    return(
        <div className={`Content`}>
            <Main/>
            <Divider/>
            <About/>
            <Divider/>
            <Features/>
            <div>

            {/*{*/}
            {/*    console.log(isAuthorized)*/}
            {/*}*/}
            {
                isAuthorized ?
                    (
                        <div>
                            <Divider/>
                            <DownloadPart/>
                        </div>
                    )
                        :
                    (
                        <div/>
                    )
            }
            </div>


        </div>
    )
}

export default Content;