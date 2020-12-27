import React,{useState} from 'react';
import './login.css'

 const Login =() =>{
    const [url,setUrl] = useState('');
    const reqSignin = ()=>{
        fetch('http://localhost:3001/',{
            method:'GET',
            headers:{
                "Access-Control-Allow-Origin": "http://localhost:3001"
            }
        })
        .then(response => response.json())
        .then(data=>openUrl(data))
    }
    const openUrl = (link)=>{
        setUrl(link);
        window.open(url,"_self")
        
    }
    return(
        <div className='login'>
            <div className='login-comp'>
                <h2>Get Your Contacts Information In One Click</h2>
                <div className='sign' onClick={reqSignin}> 
                    <img src='https://cdn.worldvectorlogo.com/logos/google-icon.svg' />
                    <p>Sign In </p>
                </div>
            </div>
        </div>
    );
}

export default Login;