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

function App() {

    const [authorized , setAuthorized] = useState(false)

    // console.log(data)
  return (
        <Router>
            <div>
                <Header isAuthorized = {authorized} setAuthorized={setAuthorized} />
                <Routes>
                    <Route path="/" element={<Content isAuthorized={authorized} setAuthorized={setAuthorized}/>} />
                    <Route path="/login" element={<Authorization />} />
                </Routes>
            </div>
        </Router>
  );


}

export default App;
