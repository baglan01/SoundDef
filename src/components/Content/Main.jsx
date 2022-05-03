import React, {useEffect} from "react";

function Main(){

    function setAnimationMain(){
        let soundOnePart = '<div class="sound"></div>'

        while(document.getElementById('mainInfoAnimation').offsetWidth <= window.innerWidth){
            document.getElementById('mainInfoAnimation').innerHTML += soundOnePart;
        }

        let count = 1;
        let i = 0.1;
        let timeDuration;

        document.querySelectorAll('.sound').forEach(f =>{

            timeDuration =  i
            if(count%2===0){
                i+=0.1;
            }else if(count%3===0){
                i+=0.2;
            }else if(count%5===0){
                i+=0.3;
            }
            count++;

            f.style.animationDelay =  timeDuration + 's';

        });
    }

    useEffect(() =>{
        setAnimationMain()
    })

    window.onresize = () =>{
        setAnimationMain()
    }

    return(
        <div className="mainInfo">

            <div className="mainInfoSloganWrap">
                <div className="mainInfoSlogan">
                    Sound is everywhere
                </div>


            </div>


            <div className="mainInfoAnimation" id="mainInfoAnimation">

            </div>

        </div>
    )
}

export default Main;