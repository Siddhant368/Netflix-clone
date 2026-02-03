import React from 'react'
import './Footer.css'
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://youtube.com" target="_blank">
          <FaYoutube className="icon youtube" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FaInstagram className="icon instagram" />
        </a>
        <a href="https://facebook.com" target="_blank">
          <FaFacebook className="icon facebook" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <FaTwitter className="icon twitter" />
        </a>
      </div>

      <p className="footer-text">
        © 2025 Netflix Clone • Built by Siddhant
      </p>
    </div>
  )
}

export default Footer
