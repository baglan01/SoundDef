import './App.css';
import './components/Header/Header'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {useState} from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Authorization from "./components/Authorization";
import AuthContent from "./components/Content/AuthContent";

function App() {

    const [authorized , setAuthorized] = useState(false)
    const [toLogin , setToLogin] = useState(true);

    // console.log(data)
  return (
        <Router>
            <div>
                <Header isAuthorized = {authorized} setAuthorized={setAuthorized} toLogin={toLogin} setToLogin={setToLogin}/>
                <Routes>
                    <Route path="/" element={<Content isAuthorized={authorized} setAuthorized={setAuthorized}/>} />
                    <Route path="/login" element={<Authorization toLogin={toLogin} setToLogin={setToLogin} authorized={authorized} setAuthorized={setAuthorized}/>} />
                    <Route path="/userMain" element={<AuthContent/>} />
                </Routes>
            </div>
        </Router>
  );


}

export default App;
