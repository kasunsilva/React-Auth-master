import React from 'react'
import { Link } from 'react-router-dom'
import './Links.scss'

function SignUpLink() {
    return (
        <div className="sign-up-link-container">
               <span className="sign-up-message">New to Autodesk?</span>
               <span className="sign-up-link"><Link to={'/register'}>Create Account</Link></span>
        </div>
    )
}

export default SignUpLink

