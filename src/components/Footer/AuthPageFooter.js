import React from 'react'
import { Link } from 'react-router-dom'
import './AuthPageFooter.scss'


const Footer = () => {
    return (
        <div className="footer-container">
            <span className="footer-message">Your account for everything Autodesk</span>
            <span className="footer-link-container"><Link to={'/register'}>Learn more</Link></span>
        </div>
    )
}

export default Footer;
