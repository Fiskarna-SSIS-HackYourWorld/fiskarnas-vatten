import React from 'react'
import "./Menu.css"
import myImage from './plantan.png';


export default function Menu() {
  return (
      <div className='menu-container'>
        <img src={myImage} alt="" />
        <h3>fiskarnas water system</h3>
      </div>
  )
}
