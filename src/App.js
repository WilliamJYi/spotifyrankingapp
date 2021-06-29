import React from "react";
import './App.css';
import Main from "./components/Main";
import Login from "./components/authentication/Login"
//import Dashboard from "./components/Dashboard";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/authentication/Dashboard";

// 'URLSearchParams(window.location.search)' will get url string after the '?' & .get() will get the code value from the url
//const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    <Switch className="App">
      <Route exact path="/"component={Login} />
      <Route exact path="/profile" component={Dashboard}/>
    </Switch>
  );
}

export default App;
