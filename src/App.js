import React,{useState,useEffect} from 'react';
import Login from './Login.js';
import Home from './Home.js'
import Header from './Header.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const App = () =>{ 

    const [isSignedIn,setSignedIn] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3001/isAuthenticated',{
            method:'GET',
            headers:{
                "Access-Control-Allow-Origin": "http://localhost:3001"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setSignedIn(data.isAuthenticated)
        }
        )
        
    },[])

    return(
            <Router>          
                <Switch>
                    {isSignedIn?<Route  exact path='/home' >
                        <Header setSignedIn={setSignedIn} />  
                        <Home/>
                    </Route>
                   :
                    <Route exact path='/'>
                        <Login />
                    </Route>
                }
                    
                    
                </Switch>
            </Router>
        );
}

export default App;
