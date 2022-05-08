import React, {useState} from 'react';
import Button from "../SubComponents/Button";
import MainModal from "../SubComponents/MainModal";
import ProfileModal from "../SubComponents/ProfileModal";




const Header = ({isAuthorized , setAuthorized}) =>{


    const [value, setValue] = useState('')


    const handleClear = (e) =>  {
        e.preventDefault()
        setValue('')
    }
    const handleChange = (e) => setValue(e.target.value)

    const [loginModalActive , setLoginModalActive ] = useState(false)
    const [ProfileModalActive , setProfileModalActive ] = useState(false)
    const [LoginPartActive , setLoginPartActive] = useState(true);

    // const [cleanInput , setCleanInput] = useState(false);

    return(
        <div className={`Header`}>
            <div className="headerWrap">
                <div className="leftPartHeader">
                    <div className="mainIcon">
                        <svg width="112" height="46" viewBox="0 0 112 46" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path className="IconPart"
                                  d="M14.625 15.875C14.625 14.7014 13.6736 13.75 12.5 13.75C11.3264 13.75 10.375 14.7014 10.375 15.875V28.125C10.375 29.2986 11.3264 30.25 12.5 30.25C13.6736 30.25 14.625 29.2986 14.625 28.125V15.875Z"
                                  fill="white"/>
                            <path className="IconPart"
                                  d="M4.375 20C4.375 18.8264 3.4236 17.875 2.25 17.875C1.07639 17.875 0.125 18.8264 0.125 20V24C0.125 25.1736 1.07639 26.125 2.25 26.125C3.4236 26.125 4.375 25.1736 4.375 24V20Z"
                                  fill="white"/>
                            <path className="IconPart"
                                  d="M97.6875 15.875C97.6875 14.7014 96.7361 13.75 95.5625 13.75C94.3889 13.75 93.4375 14.7014 93.4375 15.875V28.125C93.4375 29.2986 94.3889 30.25 95.5625 30.25C96.7361 30.25 97.6875 29.2986 97.6875 28.125V15.875Z"
                                  fill="white"/>
                            <path className="IconPart"
                                  d="M87.4375 10.375C87.4375 9.20139 86.4861 8.25 85.3125 8.25C84.1389 8.25 83.1875 9.20139 83.1875 10.375V33.625C83.1875 34.7986 84.1389 35.75 85.3125 35.75C86.4861 35.75 87.4375 34.7986 87.4375 33.625V10.375Z"
                                  fill="white"/>
                            <path className="IconPart"
                                  d="M56.6875 2.65625C56.6875 1.18924 55.4983 0 54.0312 0C52.5642 0 51.375 1.18924 51.375 2.65625V42.7188C51.375 44.1858 52.5642 45.375 54.0312 45.375C55.4983 45.375 56.6875 44.1858 56.6875 42.7188V2.65625Z"
                                  fill="white"/>
                            <path className="IconPart"
                                  d="M35.125 15.875C35.125 14.7014 34.1736 13.75 33 13.75C31.8264 13.75 30.875 14.7014 30.875 15.875V28.125C30.875 29.2986 31.8264 30.25 33 30.25C34.1736 30.25 35.125 29.2986 35.125 28.125V15.875Z"
                                  fill="white"/>
                            <path className="IconPart"
                                  d="M24.875 11.75C24.875 10.5764 23.9236 9.625 22.75 9.625C21.5764 9.625 20.625 10.5764 20.625 11.75V35C20.625 36.1736 21.5764 37.125 22.75 37.125C23.9236 37.125 24.875 36.1736 24.875 35V11.75Z"
                                  fill="white"/>
                            <path className="IconPart"
                                  d="M107.938 20C107.938 18.8264 106.986 17.875 105.812 17.875C104.639 17.875 103.688 18.8264 103.688 20V24C103.688 25.1736 104.639 26.125 105.812 26.125C106.986 26.125 107.938 25.1736 107.938 24V20Z"
                                  fill="white"/>
                            <path className="IconPart"
                                  d="M77.1875 15.875C77.1875 14.7014 76.2361 13.75 75.0625 13.75C73.8889 13.75 72.9375 14.7014 72.9375 15.875V28.125C72.9375 29.2986 73.8889 30.25 75.0625 30.25C76.2361 30.25 77.1875 29.2986 77.1875 28.125V15.875Z"
                                  fill="white"/>
                            <path className="IconPart"
                                  d="M66.9375 10.375C66.9375 9.20139 65.9861 8.25 64.8125 8.25C63.6389 8.25 62.6875 9.20139 62.6875 10.375V33.625C62.6875 34.7986 63.6389 35.75 64.8125 35.75C65.9861 35.75 66.9375 34.7986 66.9375 33.625V10.375Z"
                                  fill="white"/>
                            <path className="IconPart"
                                  d="M45.375 11.75C45.375 10.5764 44.4236 9.625 43.25 9.625C42.0764 9.625 41.125 10.5764 41.125 11.75V35C41.125 36.1736 42.0764 37.125 43.25 37.125C44.4236 37.125 45.375 36.1736 45.375 35V11.75Z"
                                  fill="white"/>
                        </svg>
                    </div>

                    <div className="headerLinks">
                        <a className="headerLink">About</a>
                        <a className="headerLink">Links</a>
                        <a className="headerLink">Links</a>
                    </div>


                </div>


                <div className="rightPartHeader">

                    {
                        isAuthorized ?
                            (
                                <div className="profileAndLogOut">
                                    <Button text='Profile'onClick={ () => {setProfileModalActive(true)}}/>
                                    <Button text='Log Out' onClick={ () => {setAuthorized(false)} }/>
                                </div>
                            )
                            :
                            (
                                <div className="loginAndSignUp">
                                    <Button onClick={ () => {setLoginModalActive(true) ; setLoginPartActive(true) }} text='login' />
                                    <Button onClick={ () => {setLoginModalActive((true)) ; setLoginPartActive(false) }}  text='Sign Up'/>
                                </div>
                            )

                    }


                </div>


            </div>


            <MainModal active={loginModalActive} setActive={setLoginModalActive}>
                {/*<LoginSignUpContent LoginPartActive={LoginPartActive} setLoginPartActive={setLoginPartActive} />*/}
                <div className={'overlayContentWrapper'}>
                    <div className="overlayContentHeader">
                        <button className="chooseBtn" id="toLoginPart" onClick={() => {setLoginPartActive(true) }}>
                            <p> Login </p>
                        </button>

                        <div className="overlayFormLogo">

                            <svg width="112" height="46" viewBox="0 0 112 46" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path className="IconPart"
                                      d="M14.625 15.875C14.625 14.7014 13.6736 13.75 12.5 13.75C11.3264 13.75 10.375 14.7014 10.375 15.875V28.125C10.375 29.2986 11.3264 30.25 12.5 30.25C13.6736 30.25 14.625 29.2986 14.625 28.125V15.875Z"
                                      fill="black"/>
                                <path className="IconPart"
                                      d="M4.375 20C4.375 18.8264 3.4236 17.875 2.25 17.875C1.07639 17.875 0.125 18.8264 0.125 20V24C0.125 25.1736 1.07639 26.125 2.25 26.125C3.4236 26.125 4.375 25.1736 4.375 24V20Z"
                                      fill="black"/>
                                <path className="IconPart"
                                      d="M97.6875 15.875C97.6875 14.7014 96.7361 13.75 95.5625 13.75C94.3889 13.75 93.4375 14.7014 93.4375 15.875V28.125C93.4375 29.2986 94.3889 30.25 95.5625 30.25C96.7361 30.25 97.6875 29.2986 97.6875 28.125V15.875Z"
                                      fill="black"/>
                                <path className="IconPart"
                                      d="M87.4375 10.375C87.4375 9.20139 86.4861 8.25 85.3125 8.25C84.1389 8.25 83.1875 9.20139 83.1875 10.375V33.625C83.1875 34.7986 84.1389 35.75 85.3125 35.75C86.4861 35.75 87.4375 34.7986 87.4375 33.625V10.375Z"
                                      fill="black"/>
                                <path className="IconPart"
                                      d="M56.6875 2.65625C56.6875 1.18924 55.4983 0 54.0312 0C52.5642 0 51.375 1.18924 51.375 2.65625V42.7188C51.375 44.1858 52.5642 45.375 54.0312 45.375C55.4983 45.375 56.6875 44.1858 56.6875 42.7188V2.65625Z"
                                      fill="black"/>
                                <path className="IconPart"
                                      d="M35.125 15.875C35.125 14.7014 34.1736 13.75 33 13.75C31.8264 13.75 30.875 14.7014 30.875 15.875V28.125C30.875 29.2986 31.8264 30.25 33 30.25C34.1736 30.25 35.125 29.2986 35.125 28.125V15.875Z"
                                      fill="black"/>
                                <path className="IconPart"
                                      d="M24.875 11.75C24.875 10.5764 23.9236 9.625 22.75 9.625C21.5764 9.625 20.625 10.5764 20.625 11.75V35C20.625 36.1736 21.5764 37.125 22.75 37.125C23.9236 37.125 24.875 36.1736 24.875 35V11.75Z"
                                      fill="black"/>
                                <path className="IconPart"
                                      d="M107.938 20C107.938 18.8264 106.986 17.875 105.812 17.875C104.639 17.875 103.688 18.8264 103.688 20V24C103.688 25.1736 104.639 26.125 105.812 26.125C106.986 26.125 107.938 25.1736 107.938 24V20Z"
                                      fill="black"/>
                                <path className="IconPart"
                                      d="M77.1875 15.875C77.1875 14.7014 76.2361 13.75 75.0625 13.75C73.8889 13.75 72.9375 14.7014 72.9375 15.875V28.125C72.9375 29.2986 73.8889 30.25 75.0625 30.25C76.2361 30.25 77.1875 29.2986 77.1875 28.125V15.875Z"
                                      fill="black"/>
                                <path className="IconPart"
                                      d="M66.9375 10.375C66.9375 9.20139 65.9861 8.25 64.8125 8.25C63.6389 8.25 62.6875 9.20139 62.6875 10.375V33.625C62.6875 34.7986 63.6389 35.75 64.8125 35.75C65.9861 35.75 66.9375 34.7986 66.9375 33.625V10.375Z"
                                      fill="black"/>
                                <path className="IconPart"
                                      d="M45.375 11.75C45.375 10.5764 44.4236 9.625 43.25 9.625C42.0764 9.625 41.125 10.5764 41.125 11.75V35C41.125 36.1736 42.0764 37.125 43.25 37.125C44.4236 37.125 45.375 36.1736 45.375 35V11.75Z"
                                      fill="black"/>
                            </svg>

                        </div>

                        <button className="chooseBtn" id="toSignUpPart" onClick={ () => {setLoginPartActive(false) }}>
                            <p> Sign Up</p>
                        </button>



                    </div>

                    <div className="overlayContentSubHeader">
                        <div className={LoginPartActive ? 'overlayContentSubHeaderBlock' : 'overlayContentSubHeaderBlock overlayContentSubHeaderBlockMove'}>

                        </div>
                    </div>


                    <div className="overlayMainContentWrap">
                        <div className={LoginPartActive ? 'overlayMainContent' : 'overlayMainContent loginPartMove'} id="overlayMainContent">
                            <div className="overlayContent" id="loginContent">
                                <div className="loginContentInnerWrapper">

                                    <div className="enterInfoBlocks">
                                        <div className="enterInfoBlocksTopic">
                                            Email
                                        </div>

                                        <div className="enterInfoBlocksInputWrapper">
                                            <input type="text" placeholder="Enter your email" id="loginFormEmail"/>
                                        </div>
                                    </div>


                                    <div className="enterInfoBlocks">
                                        <div className="enterInfoBlocksTopic">
                                            Password
                                        </div>

                                        <div className="enterInfoBlocksInputWrapper">
                                            <input type="text" placeholder="Enter your password" id="loginFormPassword"/>
                                        </div>
                                    </div>

                                    <div className={'ModalFormBtnWrapper'}>
                                        <Button text='Login' onClick={ () => {setAuthorized(true) ; setLoginModalActive(false) }} />
                                    </div>

                                </div>
                            </div>

                            <div className="overlayContent" id="signUpContent">

                                <div className="loginContentInnerWrapper">

                                    <div className="enterInfoBlocks">
                                        <div className="enterInfoBlocksTopic">
                                            Email
                                        </div>

                                        <div className="enterInfoBlocksInputWrapper">
                                            <input type="text" placeholder="Enter your email" id="signUpFormEmail" />
                                        </div>
                                    </div>

                                    <div className="enterInfoBlocks">
                                        <div className="enterInfoBlocksTopic">
                                            Name
                                        </div>

                                        <div className="enterInfoBlocksInputWrapper">
                                            <input type="text" placeholder="Enter your name" id="signUpFormName"/>
                                        </div>
                                    </div>


                                    <div className="enterInfoBlocks">
                                        <div className="enterInfoBlocksTopic">
                                            Password
                                        </div>

                                        <div className="enterInfoBlocksInputWrapper">
                                            <input type="text" placeholder="Enter your password" id="signUpFormPassword"/>
                                        </div>
                                    </div>

                                    <div className="enterInfoBlocks">
                                        <div className="enterInfoBlocksTopic">
                                            Retype password
                                        </div>

                                        <div className="enterInfoBlocksInputWrapper">
                                            <input type="text" placeholder="Enter your password"
                                                   id="signUpFormRetypePassword"/>
                                        </div>
                                    </div>

                                    <div className={'ModalFormBtnWrapper'}>
                                        <Button text='Sign Up' onClick={ () => {setAuthorized(true); setLoginModalActive(false)} }/>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </MainModal>

            <ProfileModal active={ProfileModalActive} setActive={setProfileModalActive}>


                <div className="profileInnerWrapper">

                    <button className="profileCloseBtn" onClick={() => {setProfileModalActive(false)}}>

                        <svg width="24" height="24" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M56 5.64L50.36 0L28 22.36L5.64 0L0 5.64L22.36 28L0 50.36L5.64 56L28 33.64L50.36 56L56 50.36L33.64 28L56 5.64Z"
                                fill="black"/>
                        </svg>


                    </button>


                    <div className="profileHeader">

                        <div className="profileName">
                            User Full Name
                        </div>

                        <div className="profileInfo">
                            <div className="email">
                                email@gmail.com
                            </div>

                            <div className="profileRegData">
                                11.12.2022
                            </div>
                        </div>


                    </div>
                    <div className="profileContent">

                        <div className="profileTryInfo">
                            <div className="profileTryCount">
                                You have : 4 attempts
                            </div>

                            <div className="profileHistoryTab">
                                Your past attempts :
                            </div>

                        </div>

                        <div className="profileHistory">

                            <div className="tryCard">

                                <div className="tryCardNumber">
                                    1
                                </div>

                                <div className="tryCardName">
                                    apsdjsaopjd
                                </div>



                                <div className="tryCardMoreBtn">
                                    <Button text={'More Info'}/>
                                </div>


                            </div>

                            <div className="tryCard">

                                <div className="tryCardNumber">
                                    2
                                </div>

                                <div className="tryCardName">
                                    apsdjsaopjd
                                </div>



                                <div className="tryCardMoreBtn">
                                    <Button text={'More Info'}/>
                                </div>


                            </div>

                            <div className="tryCard">

                                <div className="tryCardNumber">
                                    3
                                </div>

                                <div className="tryCardName">
                                    apsdjsaopjd
                                </div>



                                <div className="tryCardMoreBtn">
                                    <Button text={'More Info'}/>
                                </div>


                            </div>

                            <div className="tryCard">

                                <div className="tryCardNumber">
                                    4
                                </div>

                                <div className="tryCardName">
                                    apsdjsaopjd
                                </div>



                                <div className="tryCardMoreBtn">
                                    <Button text={'More Info'}/>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

            </ProfileModal>

        </div>
    )
}

export default Header;