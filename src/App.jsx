import './App.css';
import './components/Header/Header'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {useState} from "react";

function App() {

    const [authorized , setAuthorized] = useState(false);

  return (
    <div className="AppWrapper">
        <Header isAuthorized = {authorized} setAuthorized={setAuthorized} />
        <Content isAuthorized = {authorized} setAuthorized={setAuthorized}/>
    </div>
  );
}

export default App;
