import React from "react";
import {useRef, useState , useEffect , useContext} from "react";
import AuthContext from "../context/AuthProvider";
import axios from '../../api/api';

// import axios from '../api/axios'
// const LOGIN_URL = '/api/auth/login';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useNavigate
} from "react-router-dom";

const Login = ({toLogin , setToLogin , authorized , setAuthorized}) =>{

    const navigate = useNavigate();


    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log( user ,pwd);


        // setPwd('')
        // setUser('')
        // setSuccess(true)



        try {
            const response = await axios.post(
                'http://jsonplaceholder.typicode.com/posts',
                JSON.stringify({ user, pwd }),
                {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin' : '*',
                    },
                    withCredentials: true,
                }

            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
            // <Link to={'/'}/>

            setAuthorized(true)
            navigate('/userMain')

        } catch (err) {
            if (!err?.response || err.response?.status === 404 ) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return(
        <>
            {
                success ? (
                        <section>
                            <h1>You are logged in!</h1>
                            <br />
                            <p>
                                <a href="#">Go to Home</a>
                            </p>
                        </section>
                    )
                    :
                    (
                        <section>
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                            <div className="chooseLogin">

                                <p onClick={() => {setToLogin(true)}}>Sign In</p>

                                <p onClick={() => {setToLogin(false)}}>Sign Up</p>

                            </div>

                            <form onSubmit={handleSubmit}>
                                <label htmlFor={'username'}>Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                />

                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                />


                                <button><p>Sign In</p></button>

                            </form>

                        </section>

                    )
            }
        </>
    )
}

export default Login;