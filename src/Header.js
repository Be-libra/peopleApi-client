import React,{useState,useEffect} from 'react'
import {BiLogInCircle} from 'react-icons/bi'
import './Header.scss'

function Header(props) {

    const [admin,setAdmin] =useState({
        email:'',
        name:'',
        photo:''
    })
    useEffect(() => {
        fetch('http://localhost:3001/home',{
            method:'GET',
            headers:{
                "Access-Control-Allow-Origin": "http://localhost:3001"
            }
        })
        .then(res=>res.json())
        .then(admin=>{
            setAdmin({
                email:admin[0].email,
                name:admin[0].name,
                photo:admin[0].photo
            })
        })
        
    }, [])

    const logout = ()=>{
        props.setSignedIn(false)
        fetch('http://54.179.161.126//logout',{
            method:'GET',
            headers:{
                "Access-Control-Allow-Origin": "http://54.179.161.126/:3001"
            }
        })
        .then(res=>res.json())
        .then(check=>{
            if(!check.isAuthenticated){
                window.open('http://13.250.14.55/',"_self")
            }
        })       
    }

    return (
        <div className='header'>
            <div className='profile'>
                <div className='profile-img'>
                    <img src={admin.photo} alt='profile-pic' />
                </div>
                <div className='profile-desc'>
                    <p>{admin.name}</p>
                    <p>{admin.email}</p>
                </div>
            </div>
            <div className='logout'>
                <BiLogInCircle onClick={logout} />
            </div>
        </div>
    )
}

export default Header
