import React from "react";
import NN from '../../images/NN.png'
import Dataset from '../../images/dataset.svg'

function About(){
    return(
        <div className="aboutUsContent">
            <div className="contentTopic">
                About
            </div>

            <div className="aboutUsContentContent">

                <div className="aboutUsContentInnerWrapper">

                    <div className="aboutItemOne aboutTable">

                        {/*<img src="images/NN.png">*/}
                        <img src={NN}/>
                            <div className="textForAbout">
                                <div className="aboutSubTitleText">
                                    1 Problem definition
                                </div>

                                <br>
                                </br>

                                    Now that we have talked about the project idea, we can now define the problems that
                                    our project will solve. So, our goals are:
                                    <br>
                                    </br>
                                        Search and selection of dataset with "dangerous" sounds for training.
                                        <br>
                                        </br>
                                            Defining a model for sound classification.
                                            <br>
                                            </br>
                                                Create an interactive site to interact with the model for testing in
                                                real time.
                                                <br>
                                                </br>
                                                    Let's describe each of our goals and try to specify even more for a
                                                    better understanding of the solution.

                                                    <br>
                                                    </br>
                                                        <br>
                                                        </br>

                                                            <div className="aboutSubTitleText">
                                                                2 Searching and selecting dataset
                                                            </div>

                                                            <br>
                                                            </br>
                                                                Each model training task requires a lot of input data,
                                                                and the quality of our model will essentially depend on
                                                                them. Therefore, the choice of dataset is an important
                                                                part when building a model. Often the data also needs to
                                                                be filtered or "cleaned up" in case some of the samples
                                                                contain misrepresentations or false sounds for the
                                                                class.
                                                                We found two very interesting datasets, the first is the
                                                                ESC-10 and second our own dataset. But firstly , lets
                                                                see the first one.


                            </div>

                    </div>

                    <div className="aboutItemTwo aboutTable">

                        <div className="textForAbout">

                            <div className="aboutSubTitleText">
                                3 Some about our dataset.
                            </div>

                            <br>
                            </br>
                                Our dataset contains 40 .ogg sound files for each 10 classes such as:
                                <br>
                                </br>
                                    Dog barking , Rain ,
                                    <br>
                                    </br>
                                        Sea waves , Baby crying,
                                        Clock ticking
                                        <br>
                                        </br>
                                            Chainsaw sound , Rooster sound , Fire crackling , Helicopter sound
                                            <br>
                                            </br>
                                                <br>
                                                </br>
                                                    Total 400 audio files. This dataset, although small, is suitable for
                                                    quickly building a model, and thus will help to understand how to
                                                    improve the model in a less costly production. We believe that it
                                                    will perfectly show the advantages and disadvantages of model
                                                    preprocessing. And in the first part of our research we will use it.
                                                    <br>
                                                    </br>
                        </div>

                        {/*<img src="images/dataset.svg">*/}
                        <img src={Dataset}/>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default About;