import React from 'react'
import {data} from './data.js'
import {Checkbox} from '@material-ui/core'
import {HiUserCircle} from 'react-icons/hi'
import {RiDeleteBin6Line} from 'react-icons/ri'

import './home.scss'

const Home =()=>{
    return(
        <div className='contact-container'>
            <h2>Contacts <span>(170)</span></h2>
            <div className='head-grid'>
                <p>Name</p>
                <p>Email</p>
                <p>Phone Number</p>
            </div>
            {data.map((contact,index)=>
                <div className='data-grid' key={index}>
                    <div className='name-detail'>
                        <Checkbox className='checkbox'  />
                        <span><HiUserCircle/></span>
                        <p>{contact.name}</p>
                        
                    </div>
                    
                    <p className='email'>{contact.email}</p>
                    <div className='number-del'>
                        <p>{contact.contact}</p>
                        <RiDeleteBin6Line className='del-icon'/> 
                    </div>                                       
                </div>
            )}
            
        </div>
    );
}

export default Home;