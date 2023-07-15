import React, { useState } from 'react'
import Navbar from '../components/Navbar';

const Netflix = () => {
  const [isScrolled,setIsScrolled] = useState(false);
  window.onscroll = ()=>{
    setIsScrolled(window.pageXOffset === 0 ? false : true);
    return ()=>(window.onscroll = null)
  }
  return (
    <Navbar isScrolled={isScrolled} />
  )
}

export default Netflix