import React from 'react'

export default function Footer(props) {
  let mainStyle = {
    color: props.mode === 'dark' ? 'white' : 'dark',
    height: '25px'
  }
  return (
    <footer className={`text-center container position-absolute align-bottom mb-4  `} style={mainStyle}>
      <b>Created By :</b>Akash
      <br />
      Copyright &copy; WellText.All Rights Reserved.
    </footer>
  )
}