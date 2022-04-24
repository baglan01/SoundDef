import React from "react";
import Button from "../SubComponents/Button";

function DownloadPart(){
    return(
        <div className={`DownloadPart`}>

            <div className='fileLoadingPartWrapper'>

                <div className="fileLoadingPart">

                    <div className="fileLoadingPartTitle">
                        File Load
                    </div>


                    <div className="fileLoadingPartBody">
                        <div className="upload-container">

                            <div id="upload_icon" className="upload_icon">

                            </div>

                            <div id="loaded_data" className="loaded_data">

                                <div className="loaded_data_icon">


                                </div>

                                <div id='loaded_data_text' className="loaded_data_text">


                                    <input type="file" id="file_upload" accept="audio/*"/>

                                    <div className="upload_text">
                                        Click (or) Drag and Drop files here.
                                    </div>


                                </div>


                            </div>


                        </div>

                    </div>

                    <div className="ButtonWrapper">
                        <Button text='Submit'/>
                    </div>


                </div>

            </div>




        </div>
    )
}

export default DownloadPart;