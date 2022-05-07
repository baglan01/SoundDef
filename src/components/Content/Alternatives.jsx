import React from "react";
import BlackLogo from '../../images/blackLogo3.png';
import CCV from '../../images/CCV.png';
import morph3 from '../../images/morph3.png';


const Alternatives = () =>{
    return(
        <div className="Alternatives">

            <div className="alternativesTittle">
                Alternative
            </div>

            <div className="alternativesContent">

                <div className="alternativesLogoName">

                    <div className="soundDefLogo">
                        <img src={BlackLogo}/>
                    </div>


                    <div className="cameraLogo">

                        <img src={CCV}/>

                    </div>

                </div>


                <div className="alternativesMain">

                    <div className="alternativeInfo">

                        <div className="alternativeSubTopic">
                            SoundDef system
                        </div>

                        <ul>
                            <li>Cheap</li>
                            <li>Reliable</li>
                            <li>Large range</li>
                            <li>Multifunctional</li>
                        </ul>

                    </div>

                    <div className="morpheus">

                        <img src={morph3}/>
                    </div>

                    <div className="alternativeInfo">

                        <div className="alternativeSubTopic">
                            CCTV
                        </div>

                        <ul>
                            <li>Expenses</li>
                            <li>Stable tracing space</li>
                            <li>Dependent on weather condition</li>
                            <li>Dependent on time of day</li>
                        </ul>


                    </div>

                </div>


            </div>


        </div>
    )
}

export default Alternatives;

