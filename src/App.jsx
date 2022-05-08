import './App.css';
import './components/Header/Header'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {useState} from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {

    const [authorized , setAuthorized] = useState(false)

    // console.log(data)
  return (
      <Route path={'/home'}>
        <div className="AppWrapper">
            <Header isAuthorized = {authorized} setAuthorized={setAuthorized} />
            <Content isAuthorized = {authorized} setAuthorized={setAuthorized}/>
        </div>
      </Route>
  );


}

export default App;
