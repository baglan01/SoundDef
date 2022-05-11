import React, {useState} from "react";
import Button from "../SubComponents/Button";
import axios from "axios";


import loadedFile from '../../images/Audio FileAllAudio.svg'


const Upload = () =>{

    const formData = new FormData()
    const [drag , setDrag] = useState('dragEnd');

    function DragStartHandler(e){
        e.preventDefault()
        setDrag('dragStart')
    }

    function DragLeaveHandler(e){
        e.preventDefault()
        setDrag('dragEnd')
    }

    function onDropHandler(e){
        e.preventDefault();
        let files = [...e.dataTransfer.files]
        console.log(files)
        formData.append('file' , files[0])
        formData.append('useerID' , 1)
        setDrag('dragLoaded')
    }

    function sendFiles(e){
        e.preventDefault();
        axios.post('http://jsonplaceholder.typicode.com/posts' , formData)
        console.log(formData)
    }

    return(
        <div className={'Upload'}>
            <div className="uploadInnerWrapper">

                <div className={'fileLoadingPartTitle'}>
                    <p>
                       File load
                    </p>
                </div>

                <div className="fileLoadingBody">
                    {
                        drag === 'dragStart' ?
                            <div className="uploadContainer"
                                 onDragStart={ e => DragStartHandler(e)}
                                 onDragLeave={e => DragLeaveHandler(e)}
                                 onDragOver={e => DragStartHandler(e)}
                                 onDrop={ e  => onDropHandler(e)}
                            >
                                Drop file here
                            </div>
                            :    drag === 'dragEnd'?
                                <div className="uploadContainer uploadDragStart"
                                     onDragStart={ e => DragStartHandler(e)}
                                     onDragLeave={e => DragLeaveHandler(e)}
                                     onDragOver={e => DragStartHandler(e)}
                                >
                                    Drag file
                                </div>
                                :
                                <div className="uploadContainer uploadDragStart"
                                     onDragStart={ e => DragStartHandler(e)}
                                     onDragLeave={e => DragLeaveHandler(e)}
                                     onDragOver={e => DragStartHandler(e)}
                                >
                                    <div className="fileLoaded">
                                        <img src={loadedFile}/>
                                        <div className="fileLoadedText">
                                            Files taken

                                        </div>
                                    </div>
                                </div>

                    }

                </div>

                <div className="fileLoadSubmitBtn">
                    <Button text='Submit' onClick={e => sendFiles(e)}/>
                </div>

            </div>

        </div>
    )
}

export default  Upload;