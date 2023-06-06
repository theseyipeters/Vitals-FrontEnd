import React from 'react'
import './Popup.css'
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';

export default function Popup(props, {}) {

    


  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            
            <div className='pop-text'>
                <GppMaybeOutlinedIcon />
                {props.children}
            </div>

            <div className='popup-btns'>
                <button onClick={() => {props.setTrigger(false)}} className='close-btn'>Cancel</button>
                <button  className='access-btn'>Request Access</button>
            </div>
        </div>
    </div>
  ): "";
}
