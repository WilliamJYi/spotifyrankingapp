import React from "react";
import { loginUrl }  from "./Spotify";
import Dashboard from "./Dashboard";
//import Main from "../Main";
//import { Redirect } from "react-router-dom";


const Login = () => {

    const code = new URLSearchParams(window.location.search).get('code')
    
    /*const handleClick = () => {
        getLogin();
    }

    const getLogin = async () =>{
        const response = await axios.get("http://localhost:8888/login")
        const body = await response;
    }*/

    return (
        <div>
            {code ? <Dashboard code={code} /> :
                <div className="App">
                    <h1>Authentication Page</h1>
                        {/*<button onClick={handleClick}>Login with Spotify</button>
                         <input type="button" onclick={window.location.href=`${loginUrl}`} value="Login with Spotify" />*/}
                    <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
                </div>
            } 
        </div>
    )
}
export default Login;