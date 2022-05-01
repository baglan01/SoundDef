import React from "react";
import lowPrice from '../../images/Low Price.svg';
import hospital from '../../images/Hospital Insurance.svg';
import radar from '../../images/Radar.svg';
import featuresList from '../../images/Features List.svg';



const Features = () =>{
    return(
        <div className="features">
            <div className="features_topic">
                Features
            </div>

            <div className="features_content">

                <div className="features_item">

                    <div className="features_icon">

                        <img src={lowPrice}/>


                    </div>

                    <div className="features_text">
                        Cheap
                    </div>

                </div>

                <div className="features_item">

                    <div className="features_icon">

                        <img src={hospital}/>


                    </div>

                    <div className="features_text">
                        Reliable
                    </div>

                </div>

                <div className="features_item">

                    <div className="features_icon">

                        <img src={radar}/>


                    </div>
                    <div className="features_text">
                        Large range
                    </div>


                </div>

                <div className="features_item">

                    <div className="features_icon">

                        <img src={featuresList}/>

                    </div>
                    <div className="features_text">
                        multifunctional
                    </div>


                </div>


            </div>

        </div>
    )
}

export default Features;