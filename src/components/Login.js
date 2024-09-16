import React from 'react'

export default function Login(props) {
    let myStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
    }
  return (
    <div className='container '>
        <h1 style={myStyle}>Coming Soon</h1>
    </div>
  )
}
