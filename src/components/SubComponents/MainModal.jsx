import React from "react";
import './ModalStyle.css'

const MainModal = ({active , setActive}) =>{
    return(
        <div className={ active ? 'MainModal active' : 'MainModal'} onClick={ () => setActive(false) }>
            <div className="MainModalContent" onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
}
export default  MainModal;