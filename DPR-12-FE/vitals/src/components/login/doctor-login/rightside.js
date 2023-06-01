import React from 'react'
import './doctorlogin.css'
import logo from '../../../images/VitalsLogoBlue.svg'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link } from 'react-router-dom';

export default function Rightside() {
  return (
    <div>
      <div className='rightside-container'>
            <div className='rightside-details'>

                <Link to={'/'}><img className='rightside-logo' src={logo} alt='' /></Link>

                <h4>Login as a Doctor</h4>

                <form className='login-form'>
                    <div className='right-input'>
                        <p>Email address</p>
                        <div className='rightside-input'><input type="email" placeholder='e.g name@example.com' /> <EmailOutlinedIcon/></div>
                    </div>
                    
                    <div className='right-input'>
                        <p>Password</p>
                        <div className='rightside-input'><input type="password" placeholder='xxxxxxxx' /> <VisibilityOffOutlinedIcon /></div>
                    </div>
                    <div className='right-box' >
                        <div className='right-checkbox'>
                            <input type="checkbox" value='remember' />
                            <p>Remember Me</p>
                        </div>
                        <p>Forgot Password?</p>

                    </div>

                    <button>LOGIN</button>
                    
                </form>

                <Link to={'/register'}><p>Don't have an account? <span>Register</span></p></Link>


            </div>
      </div>
    </div>
  )
}
