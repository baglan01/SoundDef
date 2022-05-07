import './App.css';
import './components/Header/Header'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {useState} from "react";
import axios from "axios";

function App() {

    let data ;

    axios({
        method: 'POST',
        url:'https://jsonplaceholder.typicode.com/todos/1',
        data:{
            userId: 1 ,
            title: 'My title',
            body:'My body',
        },
    })
        .then((response) => {
            console.log(response.data)
            data = response.data;
        })
        .catch((error) => {
            console.log(error)
        });

    const [authorized , setAuthorized] = useState(false);

    console.log(data)
  return (
    <div className="AppWrapper">
        <Header isAuthorized = {authorized} setAuthorized={setAuthorized} />
        <Content isAuthorized = {authorized} setAuthorized={setAuthorized}/>
    </div>
  );


}

export default App;
