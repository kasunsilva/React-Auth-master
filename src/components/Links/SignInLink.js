import React from 'react'
import { Link } from 'react-router-dom'
import './Links.scss'

function SignInLink() {
    return (
        <div className="sign-in-link-container">
               <span className="sign-in-message">Already have an account?</span>
               <span className="sign-in-link"><Link to={'/'}>Sign in</Link></span>
        </div>
    )
}

export default SignInLink

