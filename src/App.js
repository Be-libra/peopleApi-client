import React,{useState} from 'react';
import Login from './Login.js';
import Home from './Home.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const App = () =>{ 

    return(
            <Router>               
                <Switch>
                    <Route exact path='/'>
                        <Login />
                    </Route>
                    <Route  exact path='/home' >
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        );
}

export default App;
