import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src="https://ams3.digitaloceanspaces.com/graffica/2022/12/unnamed-512x375.png" width="150px" alt="" />
      <Navbar />    
    </Link>
  
  )
}

export default Logo