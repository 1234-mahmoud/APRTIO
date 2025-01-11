import React from 'react'
import '../style/Apartment.css'
import logo from '../imgs/ApartLogo.png'
export default function Apartment({p1,title,p2}) {
  return (
    <div className='Apart_content'>
      <img src={logo} alt="" />
      <p>{p1}</p>
      <h1>{title}</h1>
      <p>{p2}</p>
    </div>
  )
}
