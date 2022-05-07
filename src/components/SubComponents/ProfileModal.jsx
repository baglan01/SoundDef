import React from "react";
import './ModalStyle.css'

const ProfileModal = ({active , setActive, children}) =>{
    return(
        <div className={ active ? 'ModalRightSideWrapper active' : 'ModalRightSideWrapper'} onClick={ () => setActive(false) }>
            <div className={active ?  'ModalRightSide active' : 'ModalRightSide'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default  ProfileModal;