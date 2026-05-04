import React from 'react'
import ArrowUp from "../../src/assets/img/icon_arrow_up.svg"
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <p>created by hope</p>
      <a href="#home"><img src={ArrowUp} alt="Up" /></a>
    </footer>
  )
}

export default Footer
