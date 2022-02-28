import React, { useState, useEffect } from 'react'
import SignInUserForm from './components/forms/signInUser'
import SignInPwdForm from './components/forms/signInPwd'
import { useToast } from '../../components/Toast'
import './signIn-page.scss'
import {useHistory} from "react-router-dom";

function SignInPage(props) {
    const toast = useToast();
    const history = useHistory()
    const [loadPwdForm, setLoadPwdForm] = useState(false)
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [varifyStatus, setVarifyStatus] = useState(false)
    const [inputError, setInputError] = useState({
        "username": {
            status: false,
            error: "The username is not recognized"
        },
        "password":
        {
            status: false,
            error: "The password is wrong"
        }
    })

    useEffect(() => {
        const userState = props.history.location.state;
        if (props.history.location.state && Object.keys(userState).length > 0 && userState.username) {
            setUserName(userState.username)
            let state = { ...props.history.location.state };
            delete state.username;
            props.history.replace({ ...props.history.location, state })
            toast.add('Account created successfully')
        }
    }, [props.history, toast]);

    const setInputHandler = (e) => {
        e.preventDefault()
        const inputFeild = e.target.id
        const inputFeildError = inputError
        if (inputFeild === 'username') {
            setUserName(e.target.value)
        }

        if (inputFeild === 'password') {
            setUserPassword(e.target.value)
        }

        inputFeildError[inputFeild]["status"] = false
    }

    const userNameSubmitHandler = (e, feildName) => {
        e.preventDefault()
        setVarifyStatus(true)
        setTimeout(async () => await submitSignIn(feildName, userName), 1000)
    }

    const passwordSubmitHandler = (e, feildName) => {
        e.preventDefault()
        setVarifyStatus(true)
        setTimeout(async () => await submitSignIn(feildName, userPassword), 1000)
    }

    const submitSignIn = async (feildName, data) => {
        if (feildName === 'username') {
            const isUserNameValid = await checkUserName(data)
            if (isUserNameValid.status) {
                setLoadPwdForm(true)
                setVarifyStatus(false)
            } else {
                const mapedInputError = inputError["username"];
                mapedInputError.status = true;
                mapedInputError.error = isUserNameValid.error;
                setVarifyStatus(false)
                setInputError({
                    ...inputError,
                    mapedInputError
                });
            }

        }

        if (feildName === 'password') {
            const isPasswordValid = await checkUserPassword(data)
            console.log('password sts: '+isPasswordValid);
            if (isPasswordValid.status) {
                setVarifyStatus(false)
                toast.add(`Logging successfully`);
                history.push('/home')
            } else {
                const mapedInputError = inputError["password"]
                mapedInputError.status = true
                mapedInputError.error = isPasswordValid.error;
                setVarifyStatus(false)
                setInputError({
                    ...inputError,
                    mapedInputError
                });
            }
        }

    }

    const checkUserName = async (userName) => {
        if (userName) {
            if(userName === 'admin'){
                return {
                    status: true
                }
            }else{
                return {
                    status: false,
                    error: "The username is not recognized"
                }
            }
        } else {
            return {
                status: false,
                error: "Username empty"
            }
        }
    }

    const checkUserPassword = async (password) => {
        if (password) {
            if(password === '1234'){
                return {
                    status: true
                }
            }else{
                return {
                    status: false,
                    error: "The password is wrong"
                }
            }
        } else {
            return {
                status: false,
                error: "Password empty"
            }
        }
    }

    const redirectToUserForm = (e) => {
        e.preventDefault()
        setLoadPwdForm(false)
    }

    return (
        <div className="signin-container">
            {!loadPwdForm &&
                <SignInUserForm
                    varifyUserStatus={varifyStatus}
                    value={userName}
                    onInputChange={(e) => setInputHandler(e)}
                    onSubmit={userNameSubmitHandler}
                    userValidationResult={inputError["username"]}
                />}
            {loadPwdForm &&

                <SignInPwdForm
                    validUserName={userName}
                    varifyPasswordStatus={varifyStatus}
                    value={userPassword}
                    onInputChange={(e) => setInputHandler(e)}
                    onSubmit={passwordSubmitHandler}
                    userValidationResult={inputError["password"]}
                    redirectToUserForm={redirectToUserForm}
                />}
        </div>
    )
}

export default SignInPage

