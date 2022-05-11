import React, {useState} from "react";
import Button from "../SubComponents/Button";
import axios from "axios";

const Upload = () =>{

    const [drag , setDrag] = useState(false);

    function DragStartHandler(e){
        e.preventDefault()
        setDrag(true)
    }

    function DragLeaveHandler(e){
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e){
        e.preventDefault();
        let files = [...e.dataTransfer.files]
        console.log(files)
        const formData = new FormData()
        formData.append('file' , files[0])
        formData.append('useerID' , 1)
        axios.post('http://jsonplaceholder.typicode.com/posts' , formData)
        console.log(formData)
        setDrag(false)
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
                        drag ?
                            <div className="uploadContainer"
                                 onDragStart={ e => DragStartHandler(e)}
                                 onDragLeave={e => DragLeaveHandler(e)}
                                 onDragOver={e => DragStartHandler(e)}
                                 onDrop={ e  => onDropHandler(e)}
                            >
                                Drag file
                            </div>
                            :
                            <div className="uploadContainer uploadDragStart"
                                 onDragStart={ e => DragStartHandler(e)}
                                 onDragLeave={e => DragLeaveHandler(e)}
                                 onDragOver={e => DragStartHandler(e)}
                            >
                                Drop file here
                            </div>
                    }

                </div>

                <div className="fileLoadSubmitBtn">
                    <Button text='Submit'/>
                </div>

            </div>

        </div>
    )
}

export default  Upload;