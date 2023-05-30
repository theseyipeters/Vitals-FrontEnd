import React from 'react'

import {Link} from 'react-router-dom'

import Links from './links.js'
import logo from '../../images/VitalsLogo.svg'
import sarah from '../../images/sarah.svg'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './sidebar.css'


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Link to="/" ><img src={logo} alt='logo' /> </Link>

      <div className='container'>    
            <form  className='searchbar'>
                <input type="text" />
                <button type='submit'>Search</button>
            </form>
      </div> 

      <Links />
      
      <div className='details-container'>
        <div className='details'>
            <img src={sarah} alt="profile" />
            <div>
                <p className='name'>Sarah</p>
                <p className='email'>omaasa@team12.com</p>
            </div>
            <button><LogoutOutlinedIcon /></button>
        </div>
      </div>

      
    </div>
  )
}
