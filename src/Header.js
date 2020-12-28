import React from 'react'
import {BiLogInCircle} from 'react-icons/bi'
import './Header.scss'

function Header() {
    return (
        <div className='header'>
            <div className='profile'>
                <div className='profile-img'></div>
                <div className='profile-desc'>
                    <p>Devipad Das</p>
                    <p>dynamicminu@gmail.com</p>
                </div>
            </div>
            <div className='logout'>
                <BiLogInCircle />
            </div>
        </div>
    )
}

export default Header
