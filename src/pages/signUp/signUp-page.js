import React, { useState } from 'react';
import SignUpForm from './components/forms/signUp'
import { useHistory } from "react-router-dom"
import './signUp-page.scss'

function SignUpPage(props) {
    const history = useHistory();
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        rusername: "",
        password: "",
        rpassword: ""
    })
    // const [formIsValid, setFormIsValid] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(false)
    const [inputError, setInputError] = useState({
        "firstname": {
            status: false,
            error: ""
        },
        "lastname": {
            status: false,
            error: ""
        },
        "username": {
            status: false,
            error: ""
        },
        "rusername": {
            status: false,
            error: ""
        },
        "password":
        {
            status: false,
            error: ""
        },
        "rpassword":
        {
            status: false,
            error: ""
        },

    })

    const inputChangeHandler = (e) => {
        e.preventDefault()
        const inputField = e.target.id
        const userDataObj = {}
        const error = inputError
        userData[inputField] = e.target.value
        setUserData({ ...userData, userDataObj })
        error[inputField]["status"] = false
        error[inputField]["error"] = ""
        setInputError({ ...inputError, error })

    }

    const signUpSubmitHandler = (e) => {
        e.preventDefault();
        setSubmitStatus(true);
        if (validateForm()) {
            setTimeout(redirectToSignIn, 1500)
        } else {
            setSubmitStatus(false);
        }
    }

    const redirectToSignIn = () => {
        setSubmitStatus(false);
        history.push({
            pathname: '/',
            state: { username: userData["username"] }
        })
    }

    const validateForm = () => {
        let fields = userData
        let errors = inputError
        let formValidStatus = true

        if (!fields["firstname"]) {
            formValidStatus = false
            errors["firstname"]["status"] = true
            errors["firstname"]["error"] = "Please enter your first name"
        }

        if (typeof fields["firstname"] !== "undefined") {
            if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
                formValidStatus = false
                errors["firstname"]["status"] = true
                errors["firstname"]["error"] = "Please enter alphabet characters only"
            }
        }

        if (!fields["lastname"]) {
            formValidStatus = false
            errors["lastname"]["status"] = true
            errors["lastname"]["error"] = "Please enter your last name"
        }

        if (typeof fields["lastname"] !== "undefined") {
            if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
                formValidStatus = false
                errors["lastname"]["status"] = true
                errors["lastname"]["error"] = "Please enter alphabet characters only"
            }
        }

        if (!fields["username"]) {
            formValidStatus = false
            errors["username"]["status"] = true
            errors["username"]["error"] = "Please enter a valid username"
        }

        if (!fields["rusername"]) {
            formValidStatus = false
            errors["rusername"]["status"] = true
            errors["rusername"]["error"] = "Please enter the same username"
        }

        if (typeof fields["rusername"] !== "undefined") {
            if (fields["rusername"] !== fields["username"]) {
                formValidStatus = false
                errors["rusername"]["status"] = true
                errors["rusername"]["error"] = "Username and re-type username not match"
            }
        }

        if (!fields["password"]) {
            formValidStatus = false
            errors["password"]["status"] = true
            errors["password"]["error"] = "Please enter your password"
        }


        if (!fields["rpassword"]) {
            formValidStatus = false
            errors["rpassword"]["status"] = true
            errors["rpassword"]["error"] = "Please enter your password"
        }

        if (typeof fields["rpassword"] !== "undefined") {
            if (fields["rpassword"] !== fields["password"]) {
                formValidStatus = false
                errors["rpassword"]["status"] = true
                errors["rpassword"]["error"] = "Password and re-type password not match"
            }
        }

        setInputError({ ...inputError, errors })
        return formValidStatus
    }

    return (
        <div className="signup-container">
            <SignUpForm
                value={userData}
                onInputChange={(e) => inputChangeHandler(e)}
                onSubmit={signUpSubmitHandler}
                formValidationResult={inputError}
                submitStatus={submitStatus}
            />
        </div>
    )
}


export default SignUpPage

