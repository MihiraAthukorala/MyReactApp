import React from 'react'
import './signup.css'

export default function Signup() {
  return (
    <div>
        <div className='SignWrapper'>
            <div className='SignContainer'>
            <h1 className='header'>
                Sign up
            </h1>
            <div className='fieldCont' >
                <br/>
            <input placeholder='Name'/>
            <br/>
            <input placeholder='e-mail'/>
            <br/>
            <input placeholder='Password'/>
            </div>
            </div>
           
        </div>
    </div>
  )
}
