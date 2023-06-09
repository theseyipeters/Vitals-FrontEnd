import React from 'react'
import './Sidebar.css'
import Link from './Link'
import hospiLogo from '../../images/hospiLogo.jpg'

function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="container">
        <form className='searchbar'>
            <input type='text' />
            <button type='submit'>Search</button>
        </form>
       </div>
       <Link />

       <div className="details-container">
        <div className="details">
            <img src={hospiLogo} alt='logo2' />
            <div>
                <p className='name'>Enugu State University</p>
                <p className='location'>Teaching Hospital(Parklane)</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Sidebar
