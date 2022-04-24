import './App.css';
import './components/Header/Header'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {useState} from "react";

function App() {

    let authorized = false;
    const [] = useState();

  return (
    <div className="AppWrapper">
        <Header isAuthorized = {authorized} />
        <Content/>
    </div>
  );
}

export default App;
