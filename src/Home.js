import React,{useState,useEffect} from 'react'
import {data} from './data.js'
import {Checkbox} from '@material-ui/core'
import {HiUserCircle} from 'react-icons/hi'
import {RiDeleteBin6Line} from 'react-icons/ri'

import './home.scss'

const Home =()=>{
    
    const [contact,setContact] = useState([])
    const [totalContacts,setTotalContacts] = useState(0)

 useEffect(() => {
    fetch('http://ec2-54-179-161-126.ap-southeast-1.compute.amazonaws.com:3001/home/contacts',{
        method:'GET',
            headers:{
                "Access-Control-Allow-Origin": "http://ec2-54-179-161-126.ap-southeast-1.compute.amazonaws.com:3001"
            }
    })
    .then(res=>res.json())
    .then(data=>{
        setContact(data[0].contacts)
        setTotalContacts(data[0].contacts.length)
    })
     
 }, [])


    return(
        <div className='contact-container'>
            <h2>Contacts <span>({totalContacts})</span></h2>
            <div className='head-grid'>
                <p>Name</p>
                <p>Email</p>
                <p>Phone Number</p>
            </div>
            {contact.map((contactDetail,index)=>{
                let names = contactDetail.names
                let photos = contactDetail.photos
                let phoneNumbers =  contactDetail.phoneNumbers
            return(
            
                <div className='data-grid' key={index}>
                    <div className='name-detail'>
                        <Checkbox className='checkbox'  />
                        <span><img src={typeof photos==="undefined"?'Unknown':photos[0].url} alt='profile' /></span>
                        <p>{typeof names==="undefined"?'Unknown':names[0].displayName}</p>
                        
                    </div>
                    
                    <p className='email'>unknown@gmail.com</p>
                    <div className='number-del'>
                        <p>{typeof phoneNumbers==="undefined"?'Unknown':phoneNumbers[0].value}</p>
                        <RiDeleteBin6Line className='del-icon'/> 
                    </div>                                       
                </div>
            )}
            )}
            
        </div>
    );
}

export default Home;